import React, { useState } from "react";
import Portal from "./Portal";

export const Modal = ({ isOpen, setModal, children }) => {
  const closeModal = () => {
    setModal(false);
  };

  if (isOpen) {
    return (
      // <Portal>
      <div className="modal" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
      // </Portal>
    );
  }
};
