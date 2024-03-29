import ReactDOM from "react-dom/client";
import "./index.css";
import 'tailwindcss/tailwind.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Mercury, Venus } from "./pages/index.ts";


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
    path: "/venus",
    element: <Venus />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
