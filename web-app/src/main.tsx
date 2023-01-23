import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { MainPanel, ProfileCard, EditProfile } from "#components/index";
import Profile from "#pages/profile/profile";
import ErrorPage from "#pages/error/error";

import App from "./App";
import "./index.css";

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
            element: <EditProfile />,
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
    <Provider store={}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
