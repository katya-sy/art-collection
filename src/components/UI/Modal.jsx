import Portal from "./Portal";
import close from "../../assets/img/close.svg";

export const Modal = ({ isOpen, setModal, children }) => {
  const closeModal = () => {
    setModal(false);
  };

  if (isOpen) {
    return (
      // <Portal>
      <div className="modal" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button onClick={closeModal} className="close-modal">
            <img src={close} />
          </button>
          {children}
        </div>
      </div>
      // </Portal>
    );
  }
};
