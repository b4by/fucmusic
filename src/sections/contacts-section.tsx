//@ts-nocheck
"use client";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const ContactsSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl border-x border-black px-8 py-12 lg:px-24 lg:py-16">
        <h3 className="mb-16 text-4xl font-bold uppercase text-black">
          Как к нам пройти
        </h3>
        <iframe
          src="https://vk.com/video_ext.php?oid=-214239262&id=456239021&hd=2"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
          className="h-[300px] w-full md:h-[450px] xl:h-[600px]"
          allowFullScreen
        ></iframe>
        <div className="mt-8">
          <YMaps>
            <Map
              className="h-[300px] lg:h-[387px] xl:w-full"
              defaultState={{
                center: [55.735765, 37.657797],
                zoom: 16,
              }}
            >
              <Placemark geometry={[55.735765, 37.657797]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </section>
  );
};
