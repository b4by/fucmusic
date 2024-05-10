type TitleSectionProps = {
  title: string;
};

export const TitleSection = ({ title }: TitleSectionProps) => {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl border-x border-white bg-white px-8 py-12 lg:px-24">
        <div className="relative flex justify-start">
          <span className="font-display bg-white pr-3 text-4xl font-black tracking-tight text-black lg:text-8xl">
            <span className="bg-gradient-to-r from-[#F18336] to-[#D12B2D] bg-clip-text font-thin text-transparent">
              ✺
            </span>
            <span className="ml-3">{title}</span>
          </span>
        </div>
      </div>
    </section>
  );
};
