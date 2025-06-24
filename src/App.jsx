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
<<<<<<< Updated upstream
=======
// import Typography from "./pages/Typography";
// import IconGallery from "./pages/IconGallery";
>>>>>>> Stashed changes

import IconGallery from "./pages/IconGallery";
import Typography from "./pages/Typography";
import Button from "./pages/Button";
import Notifications from "./pages/Notifications";
import Modals from "./pages/Modals";
// import { Button } from "react-bootstrap";

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
        path: "/typography",
        element: <Typography/>,
      },
      {
        path: "/IconGallery",
        element: <IconGallery />,
      },
      {
        path: "/Button",
        element: <Button/>,
      },
      {
        path: "/Notifications",
        element: <Notifications/>,
      },
      {
        path: "/Modals",
        element: <Modals/>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
