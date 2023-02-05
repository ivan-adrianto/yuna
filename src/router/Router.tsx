import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "../components/common/NotFoundPage";
import Homepage from "../pages/Homepage";
import MovieDetail from "../pages/MovieDetail";
import Search from "../pages/Search";

function Router() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/detail/:slug/:id",
      element: <MovieDetail />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={route} />;
}

export default Router;
