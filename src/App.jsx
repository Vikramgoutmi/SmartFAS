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

// import Typography from "./pages/Typography";
// import IconGallery from "./pages/IconGallery";


import IconGallery from "./pages/IconGallery";
import Typography from "./pages/Typography";
import NewButton from "./pages/NewButton";
import Notifications from "./pages/Notifications";
import Modals from "./pages/Modals"; 
import  Tabs  from "./pages/Tabs";
import Progress from "./pages/Progress";
import Widgets from "./pages/Widgets";
import BasicElements from "./pages/BasicElements";
import AdvancedElements from "./pages/AdvancedElements";
import Validation from "./pages/Validation";
import FormWizard from "./pages/FormWizard";


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
        path: "/NewButton",
        element: <NewButton/>,
      },
      {
        path: "/Notifications",
        element: <Notifications/>,
      },
      {
        path: "/Modals",
        element: <Modals/>,
      },
        {
        path: "/Tabs",
        element: <Tabs/>,
      },
        {
        path: "/Progress",
        element: <Progress/>,
      },

       {
        path: "/Widgets",
        element: <Widgets/>,
      },
       {
        path: "/BasicElements",
        element: <BasicElements/>,
      },
       {
        path: "/AdvancedElements",
        element: <AdvancedElements/>,
      },
       {
        path: "/Validation",
        element: <Validation/>,
      },
        {
        path: "/FormWizard",
        element: <FormWizard/>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
