import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  About,
  Articles,
  Forums,
  ForumDetail,
  Login,
  Register,
  ArticleDetail,
} from "@/components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/forums",
    children: [
      {
        index: true,
        element: <Forums />,
      },
      {
        path: ":id",
        element: <ForumDetail />,
      },
    ],
  },
  {
    path: "/articles",
    children: [
      { index: true, element: <Articles /> },
      {
        path: ":id",
        element: <ArticleDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
