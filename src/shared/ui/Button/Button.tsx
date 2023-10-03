import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
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
