import React from 'react';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';

const Modal = ({ children, closeModalHandler }) => {
  return (
    <>
      <Backdrop clicked={closeModalHandler} />
      <div className="modal">
        {children}
      </div>
    </>
  );
}

export default Modal;