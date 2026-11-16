"use client";

import { asset } from "@/lib/asset";
import { useEffect, useRef } from "react";

const VIEW_W = 547.205;
const VIEW_H = 187.281;
const PUPIL_R = 19.76;
const EYES = [
  { id: "pupil-left", cx: 93.8072, cy: 93.7151, px: 113.924, py: 159.174, max: 62 },
  { id: "pupil-right", cx: 453.745, cy: 93.7151, px: 424.101, py: 156.741, max: 62 },
] as const;

export function TrackingEyes() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const controller = new AbortController();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const current = EYES.map(() => ({ x: 0, y: 0 }));
    const target = EYES.map(() => ({ x: 0, y: 0 }));
    const pointer = { x: 0, y: 0, active: false };
    let pupils: Element[] = [];
    let frame = 0;
    let visible = false;
    let geometryDirty = true;
    let targetDirty = false;
    let rect: DOMRect;

    function schedule() {
      if (!frame && visible && !document.hidden && pupils.length === EYES.length) {
        frame = requestAnimationFrame(tick);
      }
    }
    function tick() {
      frame = 0;
      // Read layout once per pointer/scroll update, before any SVG writes.
      if (geometryDirty) {
        rect = host!.getBoundingClientRect();
        geometryDirty = false;
        targetDirty = true;
      }
      if (targetDirty) {
        EYES.forEach((eye, i) => {
          let x = 0, y = 0;
          if (pointer.active && rect.width && rect.height) {
            const dx = (pointer.x - rect.left) * VIEW_W / rect.width - eye.cx;
            const dy = (pointer.y - rect.top) * VIEW_H / rect.height - eye.cy;
            const ratio = Math.min(1, eye.max / (Math.hypot(dx, dy) || 1));
            x = dx * ratio - (eye.px - eye.cx);
            y = dy * ratio - (eye.py - eye.cy);
          }
          target[i] = { x, y };
        });
        targetDirty = false;
      }
      let moving = false;
      current.forEach((point, i) => {
        const dx = target[i].x - point.x;
        const dy = target[i].y - point.y;
        const settled = Math.abs(dx) + Math.abs(dy) < 0.05;
        const ease = reducedMotion.matches || settled ? 1 : 0.22;
        point.x += dx * ease;
        point.y += dy * ease;
        pupils[i].setAttribute("transform", `translate(${point.x.toFixed(2)} ${point.y.toFixed(2)})`);
        moving ||= !settled && ease !== 1;
      });
      // An idle or offscreen illustration has no animation loop.
      if (moving) schedule();
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      geometryDirty = true;
      if (visible) schedule();
      else { cancelAnimationFrame(frame); frame = 0; }
    });
    observer.observe(host);

    fetch(asset("/figma/service/lamps.svg"), { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load eye illustration");
        return response.text();
      })
      .then((markup) => {
        if (controller.signal.aborted) return;
        host.innerHTML = markup;
        const svg = host.querySelector("svg");
        if (!svg) return;
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svg.setAttribute("width", String(VIEW_W));
        svg.setAttribute("height", String(VIEW_H));
        svg.style.display = "block";
        svg.style.overflow = "visible";
        pupils = EYES.map((eye) => {
          const group = svg.querySelector(`#${eye.id}`)!;
          group.removeAttribute("clip-path");
          const pupil = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          pupil.setAttribute("cx", String(eye.px));
          pupil.setAttribute("cy", String(eye.py));
          pupil.setAttribute("r", String(PUPIL_R));
          pupil.setAttribute("fill", "#333441");
          group.replaceChildren(pupil);
          return group;
        });
        schedule();
      })
      .catch(() => {});

    function onMove(event: PointerEvent) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      targetDirty = true;
      schedule();
    }
    function onLeave() {
      pointer.active = false;
      targetDirty = true;
      schedule();
    }
    function onGeometryChange() {
      geometryDirty = true;
      schedule();
    }
    function onVisibilityChange() {
      if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
      else onGeometryChange();
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onGeometryChange, { passive: true });
    window.addEventListener("resize", onGeometryChange, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      controller.abort();
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onGeometryChange);
      window.removeEventListener("resize", onGeometryChange);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return <div ref={hostRef} aria-hidden className="pointer-events-none absolute" style={{ left: 445.98, top: 263.97, width: VIEW_W, height: VIEW_H }} />;
}
