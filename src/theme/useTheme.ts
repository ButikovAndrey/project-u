import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const updatedTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(updatedTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, updatedTheme);
    }

    return {theme , toggleTheme};
}