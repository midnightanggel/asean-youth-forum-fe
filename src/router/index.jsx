import { createBrowserRouter } from "react-router-dom";
import { Home, About, Articles, Forums, Login, Register } from "@/components";
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
    element: <Forums />,
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
