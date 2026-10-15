"use client";

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

    let cancelled = false;
    let frame = 0;
    const current = EYES.map(() => ({ x: 0, y: 0 }));
    const target = EYES.map(() => ({ x: 0, y: 0 }));
    const pointer = { x: 0, y: 0, active: false };

    const tick = () => {
      const svg = host.querySelector("svg");
      if (svg) {
        const rect = svg.getBoundingClientRect();
        EYES.forEach((eye, index) => {
          let tx = 0;
          let ty = 0;
          if (pointer.active && rect.width > 0 && rect.height > 0) {
            const eyeX = rect.left + (eye.cx / VIEW_W) * rect.width;
            const eyeY = rect.top + (eye.cy / VIEW_H) * rect.height;
            const dx = pointer.x - eyeX;
            const dy = pointer.y - eyeY;
            const dist = Math.hypot(dx, dy) || 1;
            const maxScreen = (eye.max / VIEW_W) * rect.width;
            const reach = Math.min(maxScreen, dist);
            const lookX = ((dx / dist) * reach * VIEW_W) / rect.width;
            const lookY = ((dy / dist) * reach * VIEW_H) / rect.height;
            tx = lookX - (eye.px - eye.cx);
            ty = lookY - (eye.py - eye.cy);
          }
          target[index].x = tx;
          target[index].y = ty;
          current[index].x += (target[index].x - current[index].x) * 0.22;
          current[index].y += (target[index].y - current[index].y) * 0.22;
          const pupil = svg.querySelector(`#${eye.id}`);
          if (pupil) {
            pupil.setAttribute(
              "transform",
              `translate(${current[index].x.toFixed(2)} ${current[index].y.toFixed(2)})`,
            );
          }
        });
      }
      frame = requestAnimationFrame(tick);
    };

    fetch("/figma/service/lamps.svg")
      .then((response) => response.text())
      .then((markup) => {
        if (cancelled) return;
        host.innerHTML = markup;
        const svg = host.querySelector("svg");
        if (!svg) return;
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svg.setAttribute("width", String(VIEW_W));
        svg.setAttribute("height", String(VIEW_H));
        svg.style.display = "block";
        svg.style.overflow = "visible";
        const svgNs = "http://www.w3.org/2000/svg";
        EYES.forEach((eye) => {
          const group = svg.querySelector(`#${eye.id}`);
          if (!group) return;
          group.removeAttribute("clip-path");
          group.replaceChildren();
          const pupil = document.createElementNS(svgNs, "circle");
          pupil.setAttribute("cx", String(eye.px));
          pupil.setAttribute("cy", String(eye.py));
          pupil.setAttribute("r", String(PUPIL_R));
          pupil.setAttribute("fill", "#333441");
          group.appendChild(pupil);
        });
        frame = requestAnimationFrame(tick);
      })
      .catch(() => {});

    const onMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
    };

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className="pointer-events-none absolute"
      style={{ left: 445.98, top: 263.97, width: VIEW_W, height: VIEW_H }}
    />
  );
}
