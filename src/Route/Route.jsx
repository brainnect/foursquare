import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";
import Reviews from "../pages/Reviews/Reviews";
import Products from "../pages/Products/Products";

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
      },
      {
        path: '/products',
        element: <Products></Products>
      }
    ],
  },
]);

export default Route;
