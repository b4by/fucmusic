import Image from "next/image";

export const DescriptionSection = () => {
  return (
    <section className="overflow-hidden">
      <section className="bg-pattern relative mx-auto max-w-7xl items-center border border-y-0 border-white bg-transparent bg-contain px-8 py-4 lg:px-24 lg:py-16">
        <div className="bg-descriptionImg w-[200px] bg-contain bg-no-repeat"></div>
        <div className="flex gap-6">
          <div className="max-w-xl py-6 text-white">
            <h3 className="mb-8 text-2xl text-white">
              <span className="font-semibold uppercase text-white">
                Fuc Music{" "}
              </span>
              — это сеть студий музыкального продакшена по всей России!
            </h3>
            <div className="flex flex-col gap-y-8">
              <p>
                В студии имеется высококлассное оборудование, необходимым для
                качественной записи и сведения вашего продукта.
              </p>
              <p>
                Команда звукорежиссёров с музыкальным образованием и большим
                опытом работы ждёт вас!
              </p>
            </div>
          </div>
          <Image
            src="/images/description-img.png"
            height="440"
            width="440"
            alt="иллюстрация с иконками оборудования музыкальной студии"
            className="right-[100px] top-0 hidden lg:absolute lg:block"
          />
        </div>
      </section>
    </section>
  );
};
