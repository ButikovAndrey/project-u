import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "shared/providers/themeProvider";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {AppRouter} from "app/provider/router";


export const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <button onClick={toggleTheme} >Change Theme</button>
            <Link to={'/'}>Main Page</Link>
            <br/>
            <Link to={'/about'}>About Page</Link>
            <AppRouter/>
        </div>
    )
}