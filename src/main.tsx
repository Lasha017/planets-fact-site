import ReactDOM from "react-dom/client";
import "./index.css";
import 'tailwindcss/tailwind.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Mercury, Venus } from "./pages/index.ts";
import Middlemercury from "./pages/mercury/Middlemercury.tsx";
import Lastmercury from "./pages/mercury/Lastmercury.tsx";
import Middlevenus from "./pages/venus/Middlevenus.tsx";
import Lastvenus from "./pages/venus/Lastvenus.tsx";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mercury",
    element: <Mercury />,
  },
  {
    path: "/mercury-structure",
    element: <Middlemercury />,
  },
  {
    path: "/mercury-surface",
    element: <Lastmercury/>,
  },
  {
    path: "/venus",
    element: <Venus />,
  },
  {
    path: "/venus-structure",
    element: <Middlevenus />
  },
  {
    path: "/venus-surface",
    element: <Lastvenus />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
