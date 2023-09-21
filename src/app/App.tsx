import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "shared/providers/themeProvider";
import {AppRouter} from "app/provider/router";
import {NavBar} from "widgets/NavBar";


export const App = () => {

    const {theme} = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <NavBar/>
            <AppRouter/>
        </div>
    )
}