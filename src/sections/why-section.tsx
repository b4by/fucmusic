import Image from "next/image";
import Link from "next/link";

export const WhySection = () => {
  return (
    <section className="overflow-hidden bg-white">
      <section className="relative mx-auto max-w-7xl items-center border border-y-0 border-black bg-white px-8 py-8 text-black lg:px-24 lg:py-16">
        <div className="mb-12 flex flex-col items-center justify-center gap-6 lg:gap-12 xl:flex-row">
          <div className="">
            <div className="relative">
              <Link href="/images/why_we.jpg">
                <Image
                  src="/images/why_we.jpg"
                  alt="логотип студии"
                  width={1000}
                  height={1000}
                  className="h-[300px] w-full object-cover"
                />
              </Link>
            </div>
          </div>
          <div className="flex max-w-xl flex-col gap-y-8 py-6 xl:ml-auto">
            <h3 className="text-4xl font-bold uppercase">Почему мы</h3>
            <ul className="flex list-inside list-decimal flex-col gap-y-6">
              <li>
                Перед тем как вы придёте к нам в студию, мы проанализируем ваши
                запросы и пожелания
              </li>
              <li>
                Подбираем звукорежиссёра, который приближен к вашему жанру
              </li>
              <li>
                Помогаем артисту и направляем его в нужное русло для получения
                уникального результата.
              </li>
            </ul>
          </div>
        </div>
        <ul className="text-md xl:text-md flex list-inside flex-col items-start gap-x-4 gap-y-4 font-bold uppercase md:flex-row md:text-xs">
          <li className="relative flex gap-x-4">
            <h3 className="pl-6">10 лет работы</h3>
            <span className="absolute left-0 bg-gradient-to-r from-[#F18336] to-[#D12B2D] bg-clip-text text-transparent md:block">
              ⬤
            </span>
          </li>
          <li className="relative flex gap-x-4">
            <h3 className="pl-6">Центр москвы</h3>
            <span className="absolute left-0 bg-gradient-to-r from-[#F18336] to-[#D12B2D] bg-clip-text text-transparent md:block">
              ⬤
            </span>
          </li>
          <li className="relative flex gap-x-4">
            <h3 className="pl-6">Самая выгодная аренда</h3>
            <span className="absolute left-0 bg-gradient-to-r from-[#F18336] to-[#D12B2D] bg-clip-text text-transparent md:block">
              ⬤
            </span>
          </li>
          <li className="relative flex gap-x-4">
            <h3 className="pl-6">Профессиональное оборудование</h3>
            <span className="absolute left-0 bg-gradient-to-r from-[#F18336] to-[#D12B2D] bg-clip-text text-transparent md:block">
              ⬤
            </span>
          </li>
        </ul>
      </section>
    </section>
  );
};
