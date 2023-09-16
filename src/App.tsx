import {Counter} from "./Components/Counter";
import './index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {MainPage} from "./Pages/MainPage/MainPage";
import {AboutPage} from "./Pages/AboutPage/AboutPage";

export const App = () => {
    return (
        <div className={'app'}>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
            </Routes>
            <Counter/>
        </div>
    )
}