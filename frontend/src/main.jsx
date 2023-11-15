import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import CocktailBySearch from "./components/CocktailBySearch";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <>Insert element for Home</> },
      { path: "/search/:name", element: <CocktailBySearch /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
