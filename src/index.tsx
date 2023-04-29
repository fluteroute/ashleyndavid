import React from "react";
import ReactDOM from "react-dom/client";
import { About, Career, Contact, Home } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";

export const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
    nodeRef: React.createRef<HTMLDivElement>(),
  },
  {
    path: "about",
    element: <About />,
    name: "About",
    nodeRef: React.createRef<HTMLDivElement>(),
  },
  {
    path: "career",
    element: <Career />,
    about: "Career",
    nodeRef: React.createRef<HTMLDivElement>(),
  },
  {
    path: "contact",
    element: <Contact />,
    name: "Contact",
    nodeRef: React.createRef<HTMLDivElement>(),
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
