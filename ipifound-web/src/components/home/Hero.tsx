"use client";

import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "./SiteHeader";
import { asset } from "@/lib/asset";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Autoplay is often blocked; click/tap overlay starts playback.
  }, []);

  function startPlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused && !video.ended) return;
    if (video.ended) video.currentTime = 0;
    void video.play();
  }

  return (
    <section
      id="home"
      className="relative aspect-video w-full overflow-hidden bg-hero"
    >
      <h1 className="sr-only">Let&apos;s found found!!</h1>

      <video
        ref={videoRef}
        className="hero-video pointer-events-none absolute inset-0 size-full object-cover"
        src={asset("/videos/hero.mp4")}
        poster={asset("/videos/hero-poster.jpg")}
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        controls={false}
        onPlay={() => setPlaying(true)}
        onEnded={() => setPlaying(false)}
        aria-hidden
      />

      <button
        type="button"
        className={
          playing
            ? "pointer-events-none absolute inset-0 z-10 bg-transparent"
            : "absolute inset-0 z-10 cursor-pointer bg-transparent"
        }
        onPointerDown={startPlayback}
        onClick={startPlayback}
        aria-label="播放片头动画"
      />

      <div className="pointer-events-none relative z-20">
        <SiteHeader />
      </div>
    </section>
  );
}
