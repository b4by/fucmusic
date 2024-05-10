import { useMusicPlayer } from "@/providers/MusicPlayerContext";
import { RefObject, useCallback, useEffect, useRef } from "react";
import {
  IoPlayCircle,
  IoPauseCircle,
  IoPlaySkipBack,
  IoPlaySkipForward,
} from "react-icons/io5";

interface AudioControlsProps {
  audioRef: RefObject<HTMLAudioElement>;
  progressBarRef: RefObject<HTMLInputElement>;
  duration: number;
  setTimeProgress: (time: number) => void;
}

export const AudioControls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
}: AudioControlsProps) => {
  const { isPlaying, setIsPlaying } = useMusicPlayer();
  const playAnimationRef = useRef<number | null>(null);

  const repeat = useCallback(() => {
    if (audioRef.current && progressBarRef.current) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);

      progressBarRef.current.value = currentTime.toString();
      const progressPercentage = (currentTime / duration) * 100;
      progressBarRef.current.style.setProperty(
        "--range-progress",
        `${progressPercentage}%`,
      );

      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);

    return () => {
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    };
  }, [isPlaying, audioRef, repeat]);

  const togglePlayPause = () => {
    setIsPlaying((prev: any) => !prev);
  };

  return (
    <div className="flex items-center gap-x-1">
      <button type="button" onClick={() => {}}>
        <IoPlaySkipBack size={20} />
      </button>
      <button type="button" onClick={togglePlayPause}>
        {isPlaying ? <IoPauseCircle size={40} /> : <IoPlayCircle size={40} />}
      </button>
      <button type="button" onClick={() => {}}>
        <IoPlaySkipForward size={20} />
      </button>
    </div>
  );
};
