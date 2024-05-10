//@ts-nocheck
import { getImageUrl } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Image from "next/image";
import { PreviewModal } from "@/components/preview-modal/preview-modal";

const EquimpentItem = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <li key={item.id} className="group">
      <div
        role="button"
        className="flex flex-col gap-6"
        onClick={() => setOpenModal(true)}
      >
        <div className="relative aspect-[4/3] max-w-[400px]">
          {item.image && item.image?.url && (
            <Image
              src={getImageUrl(item.image)}
              alt={item.name}
              fill
              className="object-contain transition duration-200 ease-in hover:scale-105"
              sizes="(max-width: 768px) 100vw"
              loading="lazy"
            />
          )}
        </div>
        <span className="text-sm">{item.name}</span>
      </div>
      <PreviewModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        item={item}
      />
    </li>
  );
};

export const EquipmentSection = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["page"],
  });

  if (isLoading) return <span>Загрузка...</span>;

  return (
    <section className="bg-white" id="equipments">
      <div className="mx-auto max-w-7xl border-x border-black px-8 py-12 lg:px-24 lg:py-16">
        <h2 className="mb-16 break-words text-3xl font-bold uppercase text-black lg:text-4xl">
          Оборудование
        </h2>
        <ul className="grid grid-cols-2 gap-6 xl:grid-cols-3">
          {data?.data?.equipments &&
            data?.data?.equipments?.length > 0 &&
            data?.data?.equipments?.map((item) => (
              <EquimpentItem key={item.id} item={item} />
            ))}
        </ul>
      </div>
    </section>
  );
};
