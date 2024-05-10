//@ts-nocheck

import { formatTime } from "@/utils/utils";
import { RefObject } from "react";

interface AudioProgressProps {
  progressBarRef: RefObject<HTMLInputElement>;
  audioRef: RefObject<HTMLAudioElement>;
  timeProgress: number;
  duration: number;
}

export const AudioProgress = ({
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
}: AudioProgressProps) => {
  const handleProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
      const newValue = progressBarRef.current.value;

      audioRef.current.currentTime = newValue;
    }
  };

  return (
    <div className="relative flex w-[400px] items-center justify-between gap-x-1">
      <span className="w-[45px] text-center text-xs leading-none text-gray-400">
        {formatTime(timeProgress)}
      </span>
      <input
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
      <span className="w-[45px] text-center text-xs leading-none text-gray-400">
        {formatTime(duration)}
      </span>
    </div>
  );
};
