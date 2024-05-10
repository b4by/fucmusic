import { cn } from "@/utils/utils";

type SwiperCustomNavigationProps = {
  handlePrev: () => void;
  handleNext: () => void;
  containerStyles: string;
  arrowsColor: string;
};

export const SwiperCustomNavigation = ({
  handlePrev,
  handleNext,
  containerStyles,
  arrowsColor,
}: SwiperCustomNavigationProps) => {
  return (
    <div
      className={cn(
        "left-0 top-1/2 mt-8 flex w-full -translate-y-1/2 justify-between lg:absolute lg:mt-0 lg:px-6 lg:pt-8",
        containerStyles,
      )}
    >
      <button
        onClick={handlePrev}
        className={cn(
          "group transition ease-in-out hover:scale-105",
          arrowsColor,
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="800"
          fill="none"
          viewBox="0 0 24 24"
          className="h-[40px] w-[40px] -rotate-180"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 15l3-3m0 0l-3-3m3 3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </button>
      <button
        onClick={handleNext}
        className={cn(
          "group transition ease-in-out hover:scale-105",
          arrowsColor,
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="800"
          fill="none"
          viewBox="0 0 24 24"
          className="h-[40px] w-[40px]"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 15l3-3m0 0l-3-3m3 3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </button>
    </div>
  );
};
