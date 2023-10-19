import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import RoutesWrapper from "./config/RoutesWrapper";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import "./index.css";

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "dark");
}

ReactDOM.render(
  <ThemeSwitcherProvider
    themeMap={themes}
    defaultTheme={localStorage.getItem("theme")}
    insertionPoint={document.getElementById("inject-styles-here")}
  >
    <HashRouter>
      <RoutesWrapper />
    </HashRouter>
  </ThemeSwitcherProvider>,
  document.getElementById("root")
);
