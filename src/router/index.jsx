import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  About,
  Articles,
  Forums,
  ForumDetail,
  Login,
  Register,
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
    element: <Articles />,
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
