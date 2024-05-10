"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const VideoButtonSection = () => {
  return (
    <section className="group-hover:bg-pattern group bg-black group-hover:bg-cover">
      <div className="mx-auto max-w-7xl border-x border-white">
        <div className="mx-auto divide-y divide-white">
          <div className="border-collapse border border-white">
            <Link
              href="#"
              data-url="https://w1111702.yclients.com"
              className="ms_booking relative block w-full overflow-hidden p-20 text-center font-black uppercase md:p-48"
            >
              <video
                autoPlay
                loop
                muted
                className="absolute left-0 top-0 h-full w-full object-cover"
              >
                <source src="video/bg1.mp4" type="video/mp4" />
              </video>
              <span className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center p-6 text-center text-3xl font-black uppercase text-white transition-all duration-200 ease-in group-hover:scale-105 group-hover:bg-black group-hover:bg-opacity-100 group-hover:mix-blend-multiply sm:text-5xl md:text-[90px]">
                Записаться онлайн
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
