import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";
import Reviews from "../pages/Reviews/Reviews";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/reviews',
        element: <Reviews></Reviews>
      }
    ],
  },
]);

export default Route;
