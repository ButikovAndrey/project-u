import React, {JSX, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

type PropsType = {
    children: JSX.Element
}

const ThemeProvider = ({children}: PropsType) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const themeParams = useMemo(()=>({theme, setTheme}), [theme])

    return (
        <ThemeContext.Provider value={themeParams}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;