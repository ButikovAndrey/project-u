import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "shared/providers/themeProvider";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";


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
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}