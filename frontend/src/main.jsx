import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import CocktailBySearch from "./components/CocktailBySearch";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Data from "./components/Data";
import RandomCocktail from "./components/RandomCocktail";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/search/:name", element: <CocktailBySearch /> },
      { path: "/favorite", element: <>Insert element for Favorite</> },
      { path: "/random", element: <RandomCocktail /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/filter", element: <Data /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
