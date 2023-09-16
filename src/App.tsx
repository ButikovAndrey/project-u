import {Counter} from "./Components/Counter";
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./Pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./Pages/AboutPage/AboutPage.async";
import {Suspense, useContext} from 'react';
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";


export const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
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