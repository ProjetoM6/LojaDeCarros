import ModalStyled from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { Children, Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react";

interface IModal {
  children: ReactNode;
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

function Modal({children, isOpenModal, setIsOpenModal}:IModal) {
  const modalUseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleCloseModal(event: Event) {
      const target = event.target instanceof Node ? event.target : null;
      if (target && !modalUseRef.current?.contains(target)) {
        setIsOpenModal(!isOpenModal)
      }
    }
    document.addEventListener("mousedown", handleCloseModal);

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [isOpenModal]);

  return (
    <ModalStyled>
      <div ref={modalUseRef}>
        <button
          className="closeModal"
          onClick={() => setIsOpenModal(false)}
        >
          <AiOutlineClose size={18} />
        </button>
        {children}
      </div>
    </ModalStyled>
  );
}

export default Modal;