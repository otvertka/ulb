import React from "react";
import classes from "./MyButton.module.css";

const MyButton = (props) => {
  return (
    //
    <button className={classes.myBtn}>{props.childrens}</button>
  );
};

export default MyButton;
