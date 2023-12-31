import ReactDOM from "react-dom/client";
import { App } from "app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "shared/providers/themeProvider";
import "shared/config/i18n/i18n";
import { ErrorBoundary } from "app/provider/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
);
