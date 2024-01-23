import { useRoutes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Album } from "../../pages/Album";
import { Photo } from "../../pages/Photo";
import { PageNotFound } from "../../pages/PageNotFound";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/album/:id", element: <Album /> },
    { path: "/photo/:id", element: <Photo /> },
    { path: "*", element: <PageNotFound /> },
  ]);
};
