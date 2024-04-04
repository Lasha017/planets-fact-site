import ReactDOM from "react-dom/client";
import "./index.css";
import "tailwindcss/tailwind.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/landing/Landing";
import Mercury from "./pages/mercury/Mercury";
import MiddleMercury from "./pages/mercury/MiddleMercury";
import LastMercury from "./pages/mercury/LastMercury";
import Venus from "./pages/venus/Venus";
import MiddleVenus from "./pages/venus/MiddleVenus";
import LastVenus from "./pages/venus/LastVenus";
import Earth from "./pages/earth/Earth";
import MiddleEarth from "./pages/earth/MiddleEarth";
import LastEarth from "./pages/earth/LastEarth";
import Mars from "./pages/mars/Mars";
import MarsMiddle from "./pages/mars/MarsMiddle";
import Jupiter from "./pages/jupiter/Jupiter";
import JupiterMiddle from "./pages/jupiter/JupiterMiddle";
import Saturn from "./pages/saturn/Saturn";
import JupiterLast from "./pages/jupiter/JupiterLast";
import MiddleSaturn from "./pages/saturn/MiddleSaturn";
import LastSaturn from "./pages/saturn/LastSaturn";
import Neptune from "./pages/neptune/Neptune";
import MiddleNeptune from "./pages/neptune/MiddleNeptune";
import LastNeptune from "./pages/neptune/LastNeptune";
import Uranus from "./pages/uranus/Uranus";
import MiddleUranus from "./pages/uranus/MiddleUranus";
import LastUranus from "./pages/uranus/LastUranus";
import MarsLast from "./pages/mars/MarsLast";

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
    element: <MarsLast />,
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
