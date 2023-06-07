import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("src/pages/Home"));
const MoviesPage = lazy(() => import("src/pages/Movies"));
const MovieDetailPage = lazy(() => import("src/pages/MovieDetail"));
const FavoritesPage = lazy(() => import("src/pages/Favorites"));
const LoginPage = lazy(() => import("src/pages/Login"));

const routes = createBrowserRouter([
  {
    path: "*",
    element: (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-5xl">Not Found</h1>
      </div>
    ),
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movies",
    element: <MoviesPage />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetailPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default routes;
