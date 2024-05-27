//@ts-nocheck
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCallback, useRef, useState } from "react";
import { SwiperCustomNavigation } from "@/components/swiper-custom-navigation/swiper-custom-navigation";
import { getImageUrl } from "@/utils/utils";
import { getBlurDataUrl } from "@/utils/utils";
import { ServiceModal } from "@/components/service-modal/service-modal";
import { useQuery } from "@tanstack/react-query";

const ServiceItem = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <li
        className="flex max-w-fit cursor-pointer flex-col"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative mb-3">
          {service.image && (
            <Image
              src={getImageUrl(service.image)}
              width="250"
              height="250"
              placeholder="blur"
              blurDataURL={getBlurDataUrl(service.image)}
              alt={service.name}
            />
          )}
        </div>
        <h4 className="mb-2 truncate font-medium uppercase text-white">
          {service.name}
        </h4>
        <div className="flex gap-x-4 text-white">
          <PriceEl
            isRange={service.isRange}
            startRange={service.priceStart}
            endRange={service.priceEnd}
            newPrice={service.newPrice}
            oldPrice={service.oldPrice}
          />
          {service.sale && (
            <span className="text-md font-light line-through">
              {new Intl.NumberFormat("ru-RU").format(service.sale)} ₽
            </span>
          )}
        </div>
      </li>
      <ServiceModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        description={service.description}
      />
    </>
  );
};

const PriceEl = ({ isRange, startRange, endRange, newPrice, oldPrice }) => {
  const formatPrice = (price) => new Intl.NumberFormat("ru-RU").format(price);

  if (isRange) {
    return (
      <div className="flex items-center gap-x-2">
        <span className="text-md font-bold">{formatPrice(startRange)}</span>
        <span>–</span>
        <span className="text-md font-bold">{formatPrice(endRange)}</span>
        <span className="text-md font-bold">₽</span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-x-2">
        {newPrice && (
          <span className="text-md font-bold">{formatPrice(newPrice)}</span>
        )}
        {oldPrice && (
          <span className="text-md line-through">{formatPrice(oldPrice)}</span>
        )}
        {newPrice || (oldPrice && <span className="text-md font-bold">₽</span>)}
      </div>
    );
  }
};

export const ServicesSection = () => {
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

  return (
    <section className="overflow-hidden bg-black" id="services">
      <div className="relative mx-auto max-w-7xl items-center border  border-y-0 border-white bg-black px-8 py-8 text-black lg:px-24 lg:py-16">
        <h2 className="mb-4 text-4xl font-bold uppercase text-white">Услуги</h2>
        <h3 className="mb-16 text-xs text-white">
          * чтобы узнать подробнее об услуге кликните на обложку
        </h3>
        <div className="mx-auto max-w-7xl">
          <ul className="mb-[30px] flex justify-center">
            <Swiper
              ref={sliderRef}
              modules={[Pagination, Navigation, A11y]}
              spaceBetween={30}
              pagination={{
                el: ".swiper-custom-pagination",
                clickable: true,
              }}
              centeredSlidesBounds="true"
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
                1048: {
                  slidesPerView: 4,
                },
              }}
            >
              {data?.data?.services &&
                data?.data?.services?.length > 0 &&
                data?.data?.services?.map((service) => (
                  <SwiperSlide key={service.id}>
                    <ServiceItem service={service} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </ul>
          <div className="swiper-custom-pagination"></div>
          <SwiperCustomNavigation {...{ handlePrev, handleNext }} />
        </div>
      </div>
    </section>
  );
};
