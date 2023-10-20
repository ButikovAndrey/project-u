import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { NavLink, useNavigate } from "react-router-dom";
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;

}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation('errPages');
    const navigate = useNavigate();

    const reloadPage = () => {
        navigate(0);
    };

    return (
        <div className={classNames(styles.PageError, [className])}>
            <h3>{t("Opps, unexpected error, please try to reload page or try it later")}</h3>
            <div className={styles.links}>
                <Button className={styles.Button} onClick={reloadPage}>{t("Reload page")}</Button>
                <NavLink className={styles.homepage} to="/">{t("Go to homepage")}</NavLink>
            </div>
        </div>
    );
};
