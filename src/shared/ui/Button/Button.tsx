import {classNames} from "shared/lib/classNames/classNames";
import styles from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
}

export const Button: FC<ButtonProps> = ({className, children, ...rest}: ButtonProps) => {
    return (
        <button
            className={classNames(styles.Button, [className])}
            {...rest}
        >
            {children}
        </button>
    );
};
