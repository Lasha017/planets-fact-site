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
  Jupiter,
  JupiterMiddle,
  JupiterLast,
  Neptune,
  MiddleNeptune,
  LastNeptune,
  Saturn,
  MiddleSaturn,
  LastSaturn,
  Uranus,
  MiddleUranus,
  LastUranus,
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
  {
    path: "/jupiter",
    element: <Jupiter />,
  },
  {
    path: "/jupiter-structure",
    element: <JupiterMiddle />,
  },
  {
    path: "/jupiter-surface",
    element: <JupiterLast />,
  },
  {
    path: "/saturn",
    element: <Saturn />,
  },
  {
    path: "/saturn-structure",
    element: <MiddleSaturn />,
  },
  {
    path: "/saturn-surface",
    element: <LastSaturn />,
  },
  {
    path: "/neptune",
    element: <Neptune />,
  },
  {
    path: "/neptune-structure",
    element: <MiddleNeptune />,
  },
  {
    path: "/neptune-surface",
    element: <LastNeptune />,
  },
  {
    path: "/uranus",
    element: <Uranus />,
  },
  {
    path: "/uranus-structure",
    element: <MiddleUranus />,
  },
  {
    path: "/uranus-surface",
    element: <LastUranus />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
