import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="overflow-hidden bg-black">
      <div className="mx-auto max-w-7xl items-center border border-y-0 border-white bg-black px-8 py-6 lg:px-24 lg:py-16">
        <div className="flex flex-col justify-center gap-y-2 md:items-center lg:block lg:gap-y-0">
          <h1 className="relative text-white md:text-center lg:text-left">
            <span className="mb-4 block text-7xl font-extrabold tracking-wider md:text-8xl lg:mb-0 lg:text-9xl">
              FUC MUSIC
            </span>
            <span className="absolute left-[9px] top-[108px] hidden h-[613px] w-[25px] bg-white transition-all duration-700 ease-in lg:block"></span>
            <div className="flex flex-col items-start gap-x-4 text-3xl font-semibold uppercase md:flex-row lg:ml-20 lg:flex-col">
              <h3>Студия</h3>
              <span className="hidden bg-gradient-to-r from-[#F18336] to-[#D12B2D] bg-clip-text text-transparent md:block lg:hidden">
                ⬤
              </span>
              <h3>Звукозаписи</h3>
              <span className="hidden bg-gradient-to-r from-[#F18336] to-[#D12B2D] bg-clip-text text-transparent md:block lg:hidden">
                ⬤
              </span>
              <h3>Москва</h3>
            </div>
          </h1>
          <div className="flex flex-col items-start gap-y-4 md:items-center lg:flex-row lg:items-end lg:justify-between">
            <a
              href="https://yandex.ru/maps/-/C2uJNrr"
              className="group mt-6 flex items-center space-x-3 lg:ml-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="h-6 w-6 transition ease-in group-hover:stroke-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span className="block text-sm font-normal text-white transition ease-in group-hover:text-gray-300 md:text-xl">
                ул. Большие Каменщики 21/8
              </span>
            </a>
            <Link
              href="tel:+79255868593"
              className="group flex items-center space-x-3 text-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="h-6 w-6 transition ease-in group-hover:stroke-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="text-sm font-normal text-white transition ease-in group-hover:text-gray-300 md:text-xl">
                +7 (925) 586-85-93
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
