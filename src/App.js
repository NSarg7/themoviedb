import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";

import "./App.css";
import { MainLayout } from "./layouts";
import { MovieInfoPage, MoviesPage, NotFoundPage, FavoritesPage } from "./pages";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div className={`wrapper ${theme}`}>
      <Routes>
        <Route path={"/"} element={<MainLayout switchTheme={switchTheme} theme={theme} />}>
          <Route index element={<Navigate to={"movie"} />} />
          <Route path={"movie"} element={<MoviesPage />} />
          <Route path={"movie/:movieId"} element={<MovieInfoPage />} />
          <Route path={"favorites"} element={<FavoritesPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export { App };
