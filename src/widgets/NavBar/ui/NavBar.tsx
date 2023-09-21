import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './NavBar.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavBarProps {
    className?: string;

}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(styles.NavBar, [className])}>

            <ThemeSwitcher/>

            <div className={styles.linksBlock}>
                <AppLink className={styles.link} to={'/'}>Main Page</AppLink>
                <AppLink className={styles.link} to={'/about'}>About Page</AppLink>
            </div>
        </div>
    );
};
