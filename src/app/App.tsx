import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "shared/providers/themeProvider";
import {AppRouter} from "app/provider/router";
import {NavBar} from "widgets/NavBar";
import {SideBar} from "widgets/SideBar";


export const App = () => {

    const {theme} = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <NavBar/>
            <div className='content_page'>
                <SideBar/>
                <AppRouter/>
            </div>

        </div>
    )
}