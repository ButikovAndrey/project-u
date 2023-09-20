import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

interface AppLinkProps extends LinkProps{
    extraClassName?: string;

}

export const AppLink: FC<AppLinkProps> = ({extraClassName, to, children, ...rest}) => {
    return (
        <Link
            to={ to }
            className={extraClassName}
            {...rest}
        >
            {children}
        </Link>
    );
};
