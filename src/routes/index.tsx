import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { About } from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFound />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
