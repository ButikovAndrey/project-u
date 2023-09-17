import {Counter} from "./components/Counter";
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Suspense, useContext} from 'react';
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


export const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <button onClick={toggleTheme} >Change Theme</button>
            <Link to={'/'}>Main Page</Link>
            <br/>
            <Link to={'/about'}>About Page</Link>
            <Suspense fallback={'loading...'}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
            <Counter/>
        </div>
    )
}