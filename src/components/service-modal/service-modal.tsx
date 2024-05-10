//@ts-nocheck
"use client";
import { cn } from "@/utils/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import ReactModal from "react-modal";

type ServiceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  className: string;
  description: string;
};

export const ServiceModal = ({
  isOpen,
  onClose,
  className,
  description,
}: ServiceModalProps) => {
  return (
    <ReactModal
      overlayClassName="fixed top-0 left-0 w-full h-full bg-zinc-800 bg-opacity-50 p-6 z-[20000]"
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      bodyOpenClassName="overflow-hidden"
      style={{
        content: {
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      className={cn(
        "my-4 max-h-full max-h-screen max-w-[650px] overflow-y-auto border-none bg-white p-6 py-10 outline-none lg:h-fit lg:max-h-[500px]",
        className,
      )}
    >
      <button
        className="absolute left-[20px] top-[10px] flex items-center justify-end space-x-2 text-black md:left-5 md:top-2 md:text-black"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            strokeWidth="0"
            d="M3.5 7L0 10.5 3.5 14H5l-3-3h17v-1H2l3-3H3.5z"
          ></path>
        </svg>
        <span className="text-sm">Вернуться</span>
      </button>
      {description && (
        <BlocksRenderer
          content={description}
          blocks={{
            paragraph: ({ children }) => (
              <p className="max-w-prose pb-1 text-neutral-900">{children}</p>
            ),
          }}
        />
      )}
    </ReactModal>
  );
};
