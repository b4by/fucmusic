import { cn } from "@/utils/utils";
import ReactModal from "react-modal";
import { useForm } from "react-hook-form";

type FormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

export const FormModal = ({ isOpen, onClose, className }: FormModalProps) => {
  const onSubmit = () => {};

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
        "my-4 max-h-full max-w-[650px] overflow-y-auto border-none bg-white p-6 py-10 outline-none lg:h-fit lg:max-h-[500px]",
        className,
      )}
    >
      <div className="p-8">
        <h2>TITLE</h2>
        <p>Desciption</p>
        {/* <form onSubmit={handleSubmit(onSubmit)}></form> */}
      </div>
    </ReactModal>
  );
};
