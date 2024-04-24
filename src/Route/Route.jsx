import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/layout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Route = createBrowserRouter([
    {
       path: '/',
       element: <Layout></Layout>,
       errorElement: <ErrorPage></ErrorPage>,
       children: [
          {
             path: '/',
             element: <Home></Home>
          }
       ]
    }
])
 
export default Route;