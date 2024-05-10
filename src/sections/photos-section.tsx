//@ts-nocheck
import { PhotoModal } from "@/components/photo-modal/photo-modal";
import { SwiperCustomNavigation } from "@/components/swiper-custom-navigation/swiper-custom-navigation";
import { getImageUrl } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { useCallback, useRef } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PhotoItem = ({ photo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-full transition-all duration-200 ease-in hover:scale-105 hover:grayscale-0 xl:grayscale">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="h-full"
        >
          <Image
            src={getImageUrl(photo)}
            width={600}
            height={300}
            alt="фотография студии"
            loading="lazy"
            className="h-full w-[600px] object-cover"
          />
        </button>
      </div>
      <PhotoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        photo={photo}
      />
    </>
  );
};

export const PhotosSection = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["page"],
  });

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  if (isLoading) return <span>Загрузка...</span>;

  return (
    <section className="" id="photos">
      <div className="relative mx-auto max-w-7xl border-x px-8 py-12 text-white lg:px-24">
        <h2 className="mb-16 text-4xl font-bold uppercase text-white">Фото</h2>
        <div className="mb-[40px] flex justify-center">
          <Swiper
            ref={sliderRef}
            modules={[Pagination, Navigation, A11y]}
            pagination={{
              el: ".swiper-photo-pagination",
              clickable: true,
            }}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {data?.data?.photos &&
              data?.data?.photos.length > 0 &&
              data?.data?.photos.map((photo) => (
                <SwiperSlide key={photo.id}>
                  <PhotoItem photo={photo} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="swiper-photo-pagination"></div>
        <SwiperCustomNavigation {...{ handlePrev, handleNext }} />
      </div>
    </section>
  );
};
