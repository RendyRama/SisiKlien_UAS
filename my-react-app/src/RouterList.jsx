import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import MainLayout from "./Layouts/MainLayout";
import Dashboard from "./Pages/Admin/Dashboard";
import Bencana from "./Pages/Admin/Bencana";

const RouterList = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "bencana",
        element: <Bencana />,
      },
    ],
  },
]);

export default RouterList;
