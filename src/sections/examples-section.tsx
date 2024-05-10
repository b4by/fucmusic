//@ts-nocheck
"use client";
import { PlaylistPlayer } from "@/components/playlist-player/playlist-player";

export const ExamplesSection = () => {
  return (
    <section className="relative" id="examples">
      <div className="relative mx-auto max-w-7xl items-center border  border-y-0 border-white bg-black px-8 py-8 text-black lg:px-24 lg:py-16">
        <h2 className="mb-16 text-4xl font-bold uppercase text-white">
          Наши работы
        </h2>
        <div className="mx-auto">
          <PlaylistPlayer />
        </div>
      </div>
    </section>
  );
};
