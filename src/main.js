// import "aos/dist/aos.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter, Outlet } from "react-router-dom";

import "./index.css"; // path must match your file

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Offers from "./Offers";
import Contact from "./Contact";
import { ThemeProvider } from "./ThemeContext";
const App = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

const AppRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // ✅ better than path: "/"
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />,
);
