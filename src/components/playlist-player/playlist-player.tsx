//@ts-nocheck
"use client";
import { useState } from "react";
import { AudioPlaylist } from "../audio-playlist/audio-playlist";
import { PlaylistTabs } from "./playlist-tabs";
import { useQuery } from "@tanstack/react-query";

export const PlaylistPlayer = () => {
  const [currentGenre, setCurrentGenre] = useState("pop");
  const { isLoading, data } = useQuery({
    queryKey: ["page"],
  });

  if (isLoading) {
    return <span>Загрузка...</span>;
  }

  return (
    <div className="flex flex-col justify-center gap-y-4">
      <PlaylistTabs
        data={data?.data?.tracks}
        setCurrentGenre={setCurrentGenre}
      />
      <AudioPlaylist
        genre={currentGenre}
        tracks={data?.data?.tracks[currentGenre]}
      />
    </div>
  );
};
