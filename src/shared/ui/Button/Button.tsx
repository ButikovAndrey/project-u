import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

type Design = "common" | "custom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  design?: Design
}

export const Button = ({
  className,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button className={classNames(styles.Button, className)} {...rest}>
      {children}
    </button>
  );
};
