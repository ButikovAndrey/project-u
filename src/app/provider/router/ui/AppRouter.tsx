import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import styles from "./AppRouter.module.scss";

const AppRouter = () => {
    return (
        <Suspense fallback={'loading...'}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) =>
                    (<Route
                        key={path}
                        path={path}
                        element={(
                            <div className={styles.AppRouter}>
                                {element}
                            </div>
                        )} />
                    ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;