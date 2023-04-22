import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Faqs from "./pages/Faqs";
import Contactus from "./pages/Contactus";
import Education from "./pages/Education";
import Podcasts from "./pages/Podcasts";
import Recruit from "./pages/Recruit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blogs />,
  },
  {
    path: "/contact",
    element: <Contactus />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "/podcasts",
    element: <Podcasts />,
  },
  {
    path: "/recruits",
    element: <Recruit />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
