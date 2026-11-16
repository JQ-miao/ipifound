"use client";

import { useRef, useState } from "react";
import { preload } from "react-dom";
import { SiteHeader } from "./SiteHeader";
import { asset } from "@/lib/asset";
import { PosterVideo } from "@/components/ui/PosterVideo";

export function Hero() {
  preload(asset("/videos/hero-poster.jpg"), { as: "image", fetchPriority: "high" });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function startPlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused && !video.ended) return;
    if (video.ended) video.currentTime = 0;
    void video.play().catch(() => setPlaying(false));
  }

  return (
    <section
      id="home"
      className="relative h-[840px] w-full overflow-hidden bg-hero"
    >
      <h1 className="sr-only">Let&apos;s found found!!</h1>

      <PosterVideo
        videoRef={videoRef}
        className="pointer-events-none absolute inset-0 size-full"
        mediaClassName="hero-video"
        src={asset("/videos/hero.mp4")}
        poster={asset("/videos/hero-poster.jpg")}
        playsInline
        preload="none"
        disablePictureInPicture
        disableRemotePlayback
        controls={false}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
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
