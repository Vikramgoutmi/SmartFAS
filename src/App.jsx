import Navbar from "./component/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./component/Layout";
import DashboardCard from "./pages/DashboardCard";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Analytics from "./pages/Analytics";
import Ecommarce from "./pages/Ecommarce";
import Colors from "./pages/Colors";
//import IconGallary from "./pages/IconGallery";
import IconGallery from "./pages/IconGallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashboardCard />,
      },
      {
        path: "/Analytics",
        element: <Analytics />,
      },
      {
        path: "/Ecommarce",
        element: <Ecommarce />,
      },
      {
        path: "/Color",
        element: <Colors />,
      },
      {
        path: "/IconGallery",
        element: <IconGallery />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
