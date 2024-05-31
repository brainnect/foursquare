import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";
import Reviews from "../pages/Reviews/Reviews";
import Products from "../pages/Products/Products";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import RecentProjects from "../pages/RecentProjects/RecentProjects";
import ProjectDetails from "../pages/projectDetails/ProjectDetails";
import Projects from "../Components/Projects/Projects";

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
        path: '/:category',
        element: <CategoryPage></CategoryPage>
      },
      {
        path: '/:category/reviews',
        element: <Reviews></Reviews>
      },
      {
        path: '/:category/products',
        element: <Products></Products>
      },
      {
        path: '/recent-projects/:projects',
        element: <RecentProjects></RecentProjects>
      },
      {
        path: '/recent-projects-details/:project',
        element: <ProjectDetails></ProjectDetails>
      },
      {
        path: '/:category/:project',
        element: <Projects></Projects>
      }
    ],
  },
]);

export default Route;
