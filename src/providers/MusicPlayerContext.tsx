"use client";
import { createContext, useContext, useState, ReactNode, FC } from "react";

interface MusicPlayerState {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  isPlaying: boolean;
  setIsPlaying: (state: any) => void;
  currentTrack: Track | null;
  setCurrentTrack: (track: Track) => void;
  playTrack: (track: Track) => void;
  pauseTrack: () => void;
  handleChangeTrack: (track: Track) => void;
}

interface Track {
  id: number;
  name: string;
  artist: string;
  src: {
    id: number;
    name: string;
    ext3: string;
    mime: string;
    size: number;
    url: string;
  };
}

const MusicPlayerContext = createContext<MusicPlayerState | undefined>(
  undefined,
);

export function useMusicPlayer() {
  const context = useContext(MusicPlayerContext);
  if (context === undefined) {
    throw new Error("useMusicPlayer must be used within a MusicPlayerProvider");
  }
  return context;
}

interface MusicPlayerProviderProps {
  children: ReactNode;
}

export const MusicPlayerProvider: FC<MusicPlayerProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  const playTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    // Logic to play the track
  };

  const pauseTrack = () => {
    setIsPlaying(false);
    // Logic to pause the track
  };

  const handleChangeTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setIsOpen(true);
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isPlaying,
        setIsPlaying,
        currentTrack,
        setCurrentTrack,
        handleChangeTrack,
        playTrack,
        pauseTrack,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
