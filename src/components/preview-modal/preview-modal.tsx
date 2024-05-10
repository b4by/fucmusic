"use client";
import Image from "next/image";
import ReactModal from "react-modal";
import { getImageUrl } from "@/utils/utils";
import { cn } from "@/utils/utils";
import { CloseIcon } from "@/icons/close-icon";

type PreviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  className: string;
  item: {
    [key: string]: any;
  };
};

export const PreviewModal = ({
  isOpen,
  onClose,
  className,
  item,
}: PreviewModalProps) => {
  //   const [mounted, setMounted] = useState(false);

  //   useEffect(() => setMounted(true), []);

  //   return mounted ? createPortal(<>{children}</>, document.body) : null;

  return (
    <ReactModal
      overlayClassName="fixed top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black z-10 bg-opacity-50"
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
        "max-w-[450px] border-none bg-white p-6 outline-none",
        className,
      )}
    >
      <div className="mb-[30px] flex max-w-[700px] items-center justify-between">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-8 top-8"
        >
          <CloseIcon />
        </button>
      </div>
      {item.image && (
        <div className="relative aspect-[4/3] max-w-[400px]">
          {item.image && item.image?.url && (
            <Image
              src={getImageUrl(item.image)}
              alt={item.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw"
            />
          )}
        </div>
      )}
    </ReactModal>
  );
};
