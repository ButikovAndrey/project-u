import { Theme, useTheme } from "shared/providers/themeProvider";
import DarkIcon from "shared/assets/icons/moon.svg";
import LightIcon from "shared/assets/icons/sun.svg";
import { Button } from "shared/ui/Button/Button";
import classNames from "classnames";
import styles from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames(styles.ThemeSwitcher, className)}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
