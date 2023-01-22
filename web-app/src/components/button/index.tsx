import styles from "./button.module.scss";

import { Variant, Size } from "#common/types";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: Size;
  variant: Variant;
  text: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${styles[props.size]} ${props.className} ${
        styles[props.variant]
      }`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
