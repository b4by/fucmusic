//@ts-nocheck

"use client";
import { useRef, useState } from "react";
import { AudioControls } from "./audio-controls";
import { AudioProgress } from "./audio-progress";
import { useMusicPlayer } from "@/providers/MusicPlayerContext";
import { cn } from "@/utils/utils";

interface AudioPlayer {
  trackSrc: string;
}

export const AudioPlayer = ({ trackSrc }: AudioPlayer) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);

  const { isOpen, setIsPlaying } = useMusicPlayer();

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      const seconds = audioRef.current.duration;
      setDuration(seconds);
      if (progressBarRef.current) {
        progressBarRef.current.max = seconds;
      }
    }
  };

  const onEnded = () => {
    setIsPlaying(false);
    audioRef.current?.pause();
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 w-full bg-white py-4",
        isOpen ? "block" : "hidden",
      )}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex items-center gap-x-1">
          <audio
            className="hidden"
            ref={audioRef}
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${trackSrc}`}
            controls
            onLoadedMetadata={onLoadedMetadata}
            onEnded={onEnded}
          />
          <AudioControls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
            }}
          />
          <AudioProgress
            {...{ progressBarRef, audioRef, timeProgress, duration }}
          />
        </div>
      </div>
    </div>
  );
};
