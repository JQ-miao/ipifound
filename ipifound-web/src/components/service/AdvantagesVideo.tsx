"use client";

import { useRef, useState } from "react";
import { asset } from "@/lib/asset";
import { PosterVideo } from "@/components/ui/PosterVideo";

export function AdvantagesVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      if (video.ended) video.currentTime = 0;
      void video.play().catch(() => setPlaying(false));
    } else {
      video.pause();
    }
  }

  return (
    <button
      type="button"
      className="absolute cursor-pointer overflow-hidden rounded-[22px] bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      style={{ left: 220.96, top: 1873.5, width: 678.76, height: 415.02 }}
      onClick={togglePlayback}
      aria-label={playing ? "暂停我们的优势视频" : "播放我们的优势视频"}
      aria-pressed={playing}
    >
      {/* Crop only the 36px/70px black sidebars outside the video's own frame. */}
      <PosterVideo
        videoRef={videoRef}
        src={asset("/videos/service-advantages.mp4")}
        poster={asset("/videos/service-advantages-poster.webp")}
        className="pointer-events-none absolute top-0 h-full max-w-none object-fill"
        style={{ left: `${(-36 / 1174) * 100}%`, width: `${(1280 / 1174) * 100}%` }}
        fit="fill"
        width={1280}
        height={720}
        preload="none"
        playsInline
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        aria-hidden
      />
    </button>
  );
}
