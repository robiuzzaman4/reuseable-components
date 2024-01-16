import {
  MouseEventHandler,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import { XMarkIcon } from "@heroicons/react/24/solid";

type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

type TModalContext = {
  onClose: () => void;
};

type TCloseButton = {
  children?: ReactNode;
};

type THeader = {
  children: ReactNode;
};

// === MODAL CONTEXT PROVDER ===
const ModalContext = createContext<TModalContext | null>(null);

const Modal = ({ isOpen, onClose, children }: TModalProps) => {
  // === MODAL BODY REF ===
  const modalBodyRef = useRef<HTMLDivElement>(null);

  // === HANDLING OUTSIDE CLOSE ===
  const handleOutsideClose: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!modalBodyRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  // === REMOVE SCROLLBAR WHEN MODAL IS OPEN ===
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 bg-slate-900/70 z-[999] flex items-center justify-center invisible",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClose}
      >
        <div
          ref={modalBodyRef}
          className="bg-slate-50 w-full max-w-md rounded p-4"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <button
      onClick={onClose}
      className="w-8 h-8 rounded-full bg-slate-50 border border-slate-300 text-slate-700 flex items-center justify-center group ml-auto"
    >
      {children ? (
        children
      ) : (
        <XMarkIcon className="size-5 group-hover:text-rose-500" />
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return (
    <div className="w-full flex items-center justify-between gap-4">
      {children}
    </div>
  );
};

Modal.CloseButton = CloseButton;
Modal.Header = Header;

export default Modal;
