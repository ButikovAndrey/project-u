import { Button } from "shared/ui/Button/Button";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./LangSwitcher.module.scss";

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const onTranslate = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <Button className={styles.LangSwitcher} onClick={onTranslate}>
      {t("Translate")}
    </Button>
  );
};
