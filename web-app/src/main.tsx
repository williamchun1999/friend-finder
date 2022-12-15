import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainPanel } from "#components/main-panel";

import App from "./App";
import Profile from "./pages/profile/profile";
import ErrorPage from "./pages/error/error";
import "./index.css";
import { ProfileCard } from "#components/profile-card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPanel />,
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <ProfileCard />,
          },
          {
            path: "edit",
          },
          {
            path: "settings",
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
