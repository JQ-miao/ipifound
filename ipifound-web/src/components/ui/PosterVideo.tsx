"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, RefObject, VideoHTMLAttributes } from "react";

type PosterVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "poster"> & {
  videoRef: RefObject<HTMLVideoElement | null>;
  poster: string;
  fit?: "cover" | "fill";
  mediaClassName?: string;
};

export function PosterVideo({
  videoRef,
  poster,
  className,
  style,
  fit = "cover",
  mediaClassName = "",
  onPlaying,
  onLoadStart,
  onEmptied,
  onError,
  ...videoProps
}: PosterVideoProps) {
  const [hasFrame, setHasFrame] = useState(false);
  const cancelFrame = useRef<() => void>(() => {});

  useEffect(() => () => cancelFrame.current(), []);

  function retainPoster() {
    cancelFrame.current();
    setHasFrame(false);
  }

  function revealFrame(video: HTMLVideoElement) {
    if (hasFrame) return;
    cancelFrame.current();
    let cancelled = false;
    let animationFrame = 0;
    let videoFrame: number | undefined;

    // Safari can clear its native poster before the video surface is painted.
    // Keep a separate cover through frame submission and the following paint.
    function afterFrame() {
      animationFrame = requestAnimationFrame(() => {
        animationFrame = requestAnimationFrame(() => {
          if (!cancelled && video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
            setHasFrame(true);
          }
        });
      });
    }

    if (typeof video.requestVideoFrameCallback === "function") {
      videoFrame = video.requestVideoFrameCallback(afterFrame);
    } else {
      // `playing` guarantees current frame data on older Safari versions.
      afterFrame();
    }

    cancelFrame.current = () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
      if (videoFrame !== undefined) video.cancelVideoFrameCallback(videoFrame);
    };
  }

  const sizing = fit === "cover" ? "object-cover" : "object-fill";
  const mediaStyle: CSSProperties = { width: "100%", height: "100%" };

  return (
    <div className={className} style={style} aria-hidden>
      <video
        {...videoProps}
        ref={videoRef}
        poster={poster}
        className={`absolute inset-0 size-full ${sizing} ${mediaClassName}`}
        style={mediaStyle}
        onPlaying={(event) => {
          revealFrame(event.currentTarget);
          onPlaying?.(event);
        }}
        onLoadStart={(event) => {
          retainPoster();
          onLoadStart?.(event);
        }}
        onEmptied={(event) => {
          retainPoster();
          onEmptied?.(event);
        }}
        onError={(event) => {
          retainPoster();
          onError?.(event);
        }}
      />
      {/* Pause/resume keeps the current frame; only a new load restores this cover. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        className={`pointer-events-none absolute inset-0 size-full ${sizing}`}
        style={{ opacity: hasFrame ? 0 : 1 }}
        draggable={false}
      />
    </div>
  );
}
