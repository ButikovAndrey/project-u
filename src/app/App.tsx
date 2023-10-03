import "./styles/index.scss";
import { useTheme } from "shared/providers/themeProvider";
import { AppRouter } from "app/provider/router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { Suspense } from "react";
import classNames from "classnames";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <Suspense fallback="">
        <NavBar />
        <div className="content_page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
