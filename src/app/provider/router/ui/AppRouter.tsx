import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";
import styles from "./AppRouter.module.scss";

const AppRouter = () => {
    return (
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) =>
                    (
                      <Route
                        key={path}
                        path={path}
                        element={(
                          <Suspense fallback={<PageLoader />}>
                            <div className={styles.AppRouter}>
                              {element}
                            </div>
                          </Suspense>
                        )}
                      />
                    ))}
            </Routes>
    );
};

export default AppRouter;
