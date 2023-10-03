import React from "react";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import styles from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation("navBar");

  return (
    <div className={classNames(styles.NavBar, className)}>
      <div className={styles.linksBlock}>
        <AppLink className={styles.link} to="/">
          {t("Main Page")}
        </AppLink>
        <AppLink className={styles.link} to="/about">
          {t("About Page")}
        </AppLink>
      </div>
    </div>
  );
};
