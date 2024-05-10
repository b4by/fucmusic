import Image from "next/image";
import Link from "next/link";

export const WhySection = () => {
  return (
    <section className="overflow-hidden bg-white">
      <section className="relative mx-auto max-w-7xl items-center border border-y-0 border-black bg-white px-8 py-8 text-black lg:px-24 lg:py-16">
        <div className="mb-12">
          <div className="xl:absolute xl:left-[100px]">
            <div className="relative mb-8 aspect-[4/3] max-w-[400px] lg:aspect-[4/3] lg:max-w-[400px] xl:h-[300px] xl:w-[400px]">
              <Link href="/images/18.jpg">
                <Image
                  src="/images/18.jpg"
                  alt="фото студии"
                  width="500"
                  height="300"
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
