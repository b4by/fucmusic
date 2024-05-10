//@ts-nocheck
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { SwiperCustomNavigation } from "@/components/swiper-custom-navigation/swiper-custom-navigation";
import { useCallback, useRef } from "react";
import { StarsRating } from "@/components/stars-rating/stars-ratings";
import { useState } from "react";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { formatDate, getImageUrl } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";

export const ReviewsSection = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["page"],
  });

  const sliderRef = useRef(null);

  const [reviews, setReviews] = useState([]);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="bg-black" id="reviews">
      <div className="relative mx-auto max-w-7xl border-x border-white px-8 py-12 lg:px-24">
        <h3 className="mb-16 text-4xl font-bold uppercase text-white">
          Отзывы с Авито
        </h3>
        <ul className="mb-8 flex">
          <Swiper
            ref={sliderRef}
            modules={[Pagination, Navigation, A11y]}
            pagination={{
              el: ".swiper-review-pagination",
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
              1078: {
                slidesPerView: 3,
              },
            }}
          >
            {data?.data?.reviews?.length > 0 &&
              data?.data?.reviews?.map((review) => (
                <SwiperSlide key={review.id} className="h-auto">
                  <li
                    key={review.id}
                    className="flex h-full flex-col gap-y-4 bg-white p-6 transition-all duration-200 ease-in"
                  >
                    <div className="flex items-center gap-2">
                      {review.photo ? (
                        <Image
                          src={getImageUrl(review.photo)}
                          width={40}
                          height={40}
                          alt="reviewer image"
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full">
                          <UserCircleIcon />
                        </div>
                      )}
                      <div className="flex items-center gap-x-1">
                        <h4 className="font-bold">{review.firstName}</h4>
                        <h4 className="font-bold">{review.lastName}</h4>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      {review.date && (
                        <time className="text-sm font-light text-gray-400">
                          {formatDate(review.date)}
                        </time>
                      )}
                    </div>
                    <StarsRating />
                    <div>{review.text}</div>
                  </li>
                </SwiperSlide>
              ))}
          </Swiper>
        </ul>
        <div className="swiper-review-pagination"></div>
        <SwiperCustomNavigation
          {...{ handlePrev, handleNext }}
          arrowsColor="stroke-white"
        />
        <a
          href="https://www.avito.ru/moskva/predlozheniya_uslug/studii_zvukozapisi_arenda_247zapissvedenie_3058704276#open-reviews-list"
          className="mt-4 block transform py-2 text-sm text-white/60 transition duration-200 ease-in-out hover:text-white focus:text-white/5 focus:shadow-none focus:outline-none lg:ml-auto lg:py-4"
        >
          Все отзывы
        </a>
      </div>
    </section>
  );
};
