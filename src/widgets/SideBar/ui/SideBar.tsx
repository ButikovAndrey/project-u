import {classNames} from "shared/lib/classNames/classNames";
import styles from './SideBar.module.scss';
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SideBarProps {
    className?: string;

}

export const SideBar = ({className}: SideBarProps) => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggleCollapse = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className={classNames(styles.SideBar, [className], {[styles.collapsed]: collapsed})}>
            <div className={styles.sidebarMenuContainer}>
                <ThemeSwitcher/>
            </div>
            <button className={styles.toggleButton} onClick={onToggleCollapse}>{collapsed?'>':'<'}</button>
        </div>
    );
};
