import ReactDOM from "react-dom/client";
import "./index.css";
import "tailwindcss/tailwind.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Mercury,
  MiddleMercury,
  LastMercury,
  Venus,
  MiddleVenus,
  LastVenus,
  Earth,
  MiddleEarth,
  LastEarth,
  Mars,
  LastMars,
  MarsMiddle,
} from "./pages/index.ts";

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
    element: <MiddleMercury />,
  },
  {
    path: "/mercury-surface",
    element: <LastMercury />,
  },
  {
    path: "/venus",
    element: <Venus />,
  },
  {
    path: "/venus-structure",
    element: <MiddleVenus />,
  },
  {
    path: "/venus-surface",
    element: <LastVenus />,
  },
  {
    path: "/earth",
    element: <Earth />,
  },
  {
    path: "/earth-structure",
    element: <MiddleEarth />,
  },
  {
    path: "/earth-surface",
    element: <LastEarth />,
  },
  {
    path: "/mars",
    element: <Mars />,
  },
  {
    path: "/mars-structure",
    element: <MarsMiddle />,
  },
  {
    path: "/mars-surface",
    element: <LastMars />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
