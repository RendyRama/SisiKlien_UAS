import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./Components/ProtectedRoute";

// Lazy load untuk komponen halaman
const Login = lazy(() => import("./Pages/Auth/Login.jsx"));
const Register = lazy(() => import("./Pages/Auth/Register.jsx"));
const MainLayout = lazy(() => import("./Layouts/MainLayout.jsx"));
const Dashboard = lazy(() => import("./Pages/Admin/Dashboard.jsx"));
const Bencana = lazy(() => import("./Pages/Admin/Bencana.jsx"));

// Rute aplikasi
const RouterList = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/main",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "bencana",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Bencana />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*", // Tambahkan fallback untuk halaman tidak ditemukan
    element: <div>404 - Page Not Found</div>,
  },
]);

export default RouterList;
