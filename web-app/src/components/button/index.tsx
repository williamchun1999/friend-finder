import styles from "./button.module.scss";

import { Variant, Size } from "#common/types";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: Size;
  variant: Variant;
  color: string;
  text: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${styles[props.size]} ${props.className} ${
        styles[props.variant]
      } ${styles[props.color]}`}
    >
      {props.text}
    </button>
  );
};
