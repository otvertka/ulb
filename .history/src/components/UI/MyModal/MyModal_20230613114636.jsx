import React from "react";
import cl from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  return (
    //
    <div className={[cl.MyModal, cl.active].join(" ")}>
      <div className={cl.myModalContent}>{children}</div>
    </div>
  );
};

export default MyModal;
