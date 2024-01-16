import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import DashboardLayout from "../components/layouts/DashboardLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <h1 className="text-3xl text-purple-500 font-bold p-4">Overview</h1>
        ),
      },

      {
        path: "content",
        element: (
          <h1 className="text-3xl text-purple-500 font-bold p-4">Content</h1>
        ),
      },
    ],
  },
]);

export default routes;
