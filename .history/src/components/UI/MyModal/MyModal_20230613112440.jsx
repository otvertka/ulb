import React from "react";
import cl from "./MyModal.module.css";

const MyModal = (children) => {
  return (
    //
    <div className={cl.MyModal}>
      <div className={cl.MyModalContent}>{children}</div>
    </div>
  );
};
