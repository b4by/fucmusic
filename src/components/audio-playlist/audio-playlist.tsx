//@ts-nocheck
"use client";
import { useEffect, useRef, useState } from "react";
import { BounceIcon } from "@/icons/bounce-icon";
import { cn } from "@/utils/utils";

export const AudioPlaylist = ({ genre, tracks }) => {
  const audioPlayer = useRef();
  const [currentSongIndex, setCurrentSongIndex] = useState(
    tracks && tracks[0].src.id,
  );
  const [currentSong] = useState(
    tracks && tracks.filter((song) => song.src.id === currentSongIndex)[0],
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(30);

  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioPlayer) {
      audioPlayer.current.volume = volume / 100;
    }

    if (isPlaying) {
      setInterval(() => {
        const _duration = Math.floor(audioPlayer?.current?.duration);
        const _elapsed = Math.floor(audioPlayer?.current?.currentTime);

        setDuration(_duration);
        setElapsed(_elapsed);
      }, 100);
    }
  }, [volume, isPlaying]);

  function formatTime(time) {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60);
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60);

      return `${minutes}:${seconds}`;
    }
    return "00:00";
  }

  const togglePlay = (index) => {
    setCurrentSongIndex(index);
    if (isPlaying && currentSongIndex !== index) {
      audioPlayer.current.pause();
      audioPlayer.current.src = `https://api.fucmusic.ru${tracks.filter((song) => song.src.id === index)[0].src.url}`;
      audioPlayer.current.play();
      return;
    }
    if (!isPlaying && currentSongIndex === index) {
      setIsPlaying((prev) => !prev);
      audioPlayer.current.play();
      return;
    }
    if (!isPlaying && currentSongIndex !== index) {
      setIsPlaying((prev) => !prev);
      audioPlayer.current.pause();
      audioPlayer.current.src = `https://api.fucmusic.ru${tracks.filter((song) => song.src.id === index)[0].src.url}`;
      audioPlayer.current.play();
      return;
    }
    if (!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <div>
      <audio
        src={`https://api.fucmusic.ru${currentSong.src.url}`}
        ref={audioPlayer}
      />
      <ul className="flex flex-col">
        {tracks?.map((song, key) => (
          <li key={song.id} onClick={() => togglePlay(song.src.id)}>
            <div className="flex items-center">
              <button
                className={cn(
                  "group flex flex-shrink-0 flex-grow items-center py-3 pr-1 transition-all duration-200 ease-in hover:bg-white/10",
                  isPlaying && currentSongIndex === song.src.id
                    ? "bg-white/10"
                    : "bg-transparent",
                )}
              >
                <div className="relative mr-3 flex h-8 w-8 flex-col items-center justify-center text-sm text-white/60">
                  {isPlaying && currentSongIndex === song.src.id ? (
                    <BounceIcon />
                  ) : (
                    key + 1
                  )}
                </div>
                <span className="text-sm text-white/60 group-hover:text-white">
                  {song.name}
                </span>
                <time className="ml-auto block text-xs text-white/60 group-hover:text-white">
                  {song.duration}
                </time>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
