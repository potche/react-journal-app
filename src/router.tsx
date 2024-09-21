import { createBrowserRouter, Outlet } from "react-router-dom";
import { Error, Login, Register } from "./auth/pages";
import { Journal } from "./journal/pages/Journal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Hello world!
        <Outlet />
      </div>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/journal",
        element: <Journal />,
      },
      {
        path: "/auth/*",
        element: (
          <div>
            auth
            <Outlet />
          </div>
        ),
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },
]);
