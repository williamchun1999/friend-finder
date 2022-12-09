import styles from "./button.module.scss";

import { Shape, Size } from "#common/types";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: Size;
  shape: Shape;
  color: string;
  text: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${styles[props.size]} ${props.className} ${
        styles[props.shape]
      } ${styles[props.color]}`}
    >
      {props.text}
    </button>
  );
};
