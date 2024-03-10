import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider, useAuth } from "./context/authContext";
import axios from "axios";
import { ProfileProvider } from "./context/profileContext";
import { useEffect } from "react";
import { baseUrl } from "./api/api";
import Home from "./pages/Home";

const Layout = () => {
  const { isAuthenticated, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [isAuthenticated]);

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  axios.defaults.baseURL = baseUrl;
  axios.defaults.withCredentials = true;

  return (
    <>
      <AuthProvider>
        <ProfileProvider>
          <RouterProvider router={router} />
          <Toaster />
        </ProfileProvider>
      </AuthProvider>
    </>
  );
}

export default App;
