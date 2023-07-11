import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error-Page";
import Profile from "./pages/Profile";
import Card from "./components/Card";
import "./App.css";
import Matching from "./pages/Matching";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />,
  }, 
  {
    path: "/matching",
    element: <Matching />,
    errorElement: <ErrorPage />,
  }
  
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
