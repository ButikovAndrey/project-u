import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './NavBar.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavBarProps {
    className?: string;

}

export const NavBar = ({className}: NavBarProps) => {

    const {t} = useTranslation('navBar');

    return (
        <div className={classNames(styles.NavBar, [className])}>
            <div className={styles.linksBlock}>
                <AppLink className={styles.link} to={'/'}>{t("Main Page")}</AppLink>
                <AppLink className={styles.link} to={'/about'}>{t("About Page")}</AppLink>
            </div>
        </div>
    );
};
