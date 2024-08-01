import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import About from "../components/Home/About/About";
import Academics from "../components/Academics/Academics";
import Faculty from "../components/Faculty/Faculty";
import Students from "../components/Students/Students";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path : "/",
        element: <Home/>
      },
      {
        path : "aboutUs",
        element: <About/>
      },
      {
        path : "academics",
        element: <Academics/>
      },
      {
        path : "faculty",
        element: <Faculty/>
      },
      {
        path : "students",
        element: <Students/>
      },
      {
        path : "gallery",
        element: <Gallery/>
      },
      {
        path : "contact",
        element: <Contact/>
      },
    ],
  },
]);
