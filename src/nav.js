// import { IoHomeOutline } from "react-icons/io5";
// import { MdOutlineRestorePage } from "react-icons/md";
// import { IoAnalytics } from "react-icons/io5";
// import { CiShop } from "react-icons/ci";
// import { MdOutlineSpaceDashboard } from "react-icons/md";
// import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
// import { FaInbox } from "react-icons/fa6";
// import { MdInvertColors } from "react-icons/md";
// import { TbFileTypography } from "react-icons/tb";
// import { TbIconsFilled } from "react-icons/tb";
// import { IoIosRadioButtonOn } from "react-icons/io";
// import { IoIosNotifications } from "react-icons/io";
// import { SiModal } from "react-icons/si";
// import { FaDatabase } from "react-icons/fa";
// import { CiViewTable } from "react-icons/ci";
// import { FaWpforms } from "react-icons/fa6";
// import { FaChartSimple } from "react-icons/fa6";
// import { IoMdContacts } from "react-icons/io";
// import { FaCalendarAlt } from "react-icons/fa";
// import { ImProfile } from "react-icons/im";
// import { FaRegFile } from "react-icons/fa6";
// import { SiRustdesk } from "react-icons/si";
// import { RiPagesLine } from "react-icons/ri";
// import { SiAegisauthenticator } from "react-icons/si";
// import { FiLayout } from "react-icons/fi";
// import { CiCircleQuestion } from "react-icons/ci";

// // components of navbar
// const menuItems = [
//   {
//     title: "Dashboard",
//     icon: IoHomeOutline,
//     link: "/",
//     child: [
//       {
//         childtitle: "Default",
//         childlink: "./",
//         childicon: MdOutlineRestorePage,
//       },
//       {
//         childtitle: "Analytics",
//         childlink: "./Analytics",
//         childicon: IoAnalytics,
//       },
//       {
//         childtitle: "E-commerce",
//         childlink: "./Ecommarce",
//         childicon: CiShop,
//       },
//       {
//         childtitle: "Sass Dashboard",
//         childlink: "./SaasDashboard",
//         childicon: MdOutlineSpaceDashboard,
//       },
//       {
//         childtitle: "Systems",
//         childlink: "./System",
//         childicon: MdOutlineSystemSecurityUpdateGood,
//       },
//     ],
//   },
//   {
//     title: "UI elements",
//     icon: FaInbox,
//     link: "",
//     child: [
//       {
//         childtitle: "Colors",
//         childlink: "./color",
//         childicon: MdInvertColors,
//       },

//       {
//         childtitle: "Typography",
//         childlink: "./typography",
//         childicon: TbFileTypography,
//       },

//       {
//         childtitle: "IconGallery",
//         childlink: "./IconGallery",
//         childicon: TbIconsFilled,
//       },

//       {
//         childtitle: "Button",
//         childlink: "./NewButton",
//         childicon: IoIosRadioButtonOn,
//       },

//       {
//         childtitle: "Notifications",
//         childlink: "./Notifications",
//         childicon: IoIosNotifications,
//       },

//       {
//         childtitle: "Modals",
//         childlink: "/Modals",
//         childicon: SiModal,
//       },

//       {
//         childtitle: "Tabs & Accordion",
//         childlink: "/Tabs",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Progress",
//         childlink: "/Progress",
//         childicon: FaDatabase,
//       },
//     ],
//   },
//   {
//     title: "Widgets",
//     icon: FaDatabase,
//     // link: "/Widgets",
//     child: [
//       {
//         childtitle: "Widgets",
//         childlink: "./Widgets",
//         childicon: MdInvertColors,
//       },]
//   },
//   {
//     title: "Forms",
//     icon: FaWpforms,
//     link: "",
//     child: [
//       {
//         childtitle: "Basic Elements",
//         childlink: "./BasicElements",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Advanced Elements",
//         childlink: "./AdvancedElements",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Validation",
//         childlink: "student/assign-room",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Wizard",
//         childlink: "student/checkin-checkout",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Layout",
//         childlink: "student/id-card",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "File upload",
//         childlink: "student/reports",
//         childicon: FaDatabase,
//       },
//     ],
//   },
//   {
//     title: "Tables",
//     icon: CiViewTable,
//     link: "",
//     child: [
//       {
//         childtitle: "Basic Tables",
//         childlink: "student/registerStudent",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Advanced Tables",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Data Tables",
//         childlink: "student/assign-room",
//         childicon: FaDatabase,
//       },
//     ],
//   },
//   {
//     title: "Calendar",
//     icon: FaCalendarAlt,
//     link: "dashboard",
//   },

//   {
//     title: "Charts",
//     icon: FaChartSimple,
//     link: "",
//     child: [
//       {
//         childtitle: "Inline Chart",
//         childlink: "student/registerStudent",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Chartjs",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "ApexCharts",
//         childlink: "student/assign-room",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Datamaps",
//         childlink: "student/assign-room",
//         childicon: FaDatabase,
//       },
//     ],
//   },
//   {
//     title: "Contacts",
//     icon: IoMdContacts,
//     link: "",
//     child: [
//       {
//         childtitle: "Contact List",
//         childlink: "student/registerStudent",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Contact Grid",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "New Contact",
//         childlink: "student/assign-room",
//         childicon: FaDatabase,
//       },
//     ],
//   },
//   {
//     title: "Profile",
//     icon: ImProfile,
//     link: "",
//     child: [
//       {
//         childtitle: "Overview",
//         childlink: "student/registerStudent",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Settings",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Security",
//         childlink: "student/assign-room",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Notifications",
//         childlink: "student/assign-room",
//         childicon: FaDatabase,
//       },
//     ],
//   },
//   {
//     title: "File Manager",
//     icon: FaRegFile,
//     link: "",
//     child: [
//       {
//         childtitle: "Files List",
//         childlink: "student/registerStudent",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Files Grid",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//     ],
//   },
//   {
//     title: "Help Desk",
//     icon: SiRustdesk,
//     link: "",
//     child: [
//       {
//         childtitle: "Home",
//         childlink: "student/registerStudent",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Tickets",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Ticket Detail",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "FAQs",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//     ],
//   },

//   {
//     title: "Pages",
//     icon: RiPagesLine,
//     link: "",
//     child: [
//       {
//         childtitle: "Orders",
//         childlink: "student/registerStudent",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Timeline",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Invoice",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Page 404",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Page 500",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Blank",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//     ],
//   },
//   {
//     title: "Authentication",
//     icon: SiAegisauthenticator,
//     link: "",
//     child: [
//       {
//         childtitle: "Login 1",
//         childlink: "student/registerStudent",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Login 2",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Register",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Reset Password",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Confirm Password",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//     ],
//   },

//   {
//     title: "Layout",
//     icon: FiLayout,
//     link: "",
//     child: [
//       {
//         childtitle: "Default",
//         childlink: "student/registerStudent",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Top Navigation",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//       {
//         childtitle: "Boxed",
//         childlink: "student/view",
//         childicon: FaDatabase,
//       },
//     ],
//   },

//   {
//     title: "Getting Start",
//     icon: CiCircleQuestion,
//     link: "",
//   },

//   // error
// ];

// export default menuItems;

// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// // Import Icons
// import { IoHomeOutline, IoAnalytics } from "react-icons/io5";
// import {
//   MdOutlineRestorePage,
//   MdOutlineSpaceDashboard,
//   MdOutlineSystemSecurityUpdateGood,
// } from "react-icons/md";
// import { CiShop } from "react-icons/ci";

// // Menu Configuration
// const menuItems = [
//   {
//     title: "Dashboard",
//     icon: IoHomeOutline,
//     link: "/",
//     child: [
//       {
//         childtitle: "Default",
//         childlink: "./",
//         childicon: MdOutlineRestorePage,
//       },
//       {
//         childtitle: "Analytics",
//         childlink: "./Analytics",
//         childicon: IoAnalytics,
//       },
//       {
//         childtitle: "E-commerce",
//         childlink: "./Ecommarce",
//         childicon: CiShop,
//       },
//       {
//         childtitle: "Sass Dashboard",
//         childlink: "./SaasDashboard",
//         childicon: MdOutlineSpaceDashboard,
//       },
//       {
//         childtitle: "Systems",
//         childlink: "./System",
//         childicon: MdOutlineSystemSecurityUpdateGood,
//       },
//     ],
//   },
// ];

// const Nav = () => {
//   const location = useLocation();

//   return (
//     <ul className="navbar-nav flex-fill w-100 mb-2">
//       {menuItems.map((item, index) => {
//         const Icon = item.icon;
//         return (
//           <li className="nav-item dropdown" key={index}>
//             <a
//               href={`#${item.title.toLowerCase()}`}
//               data-toggle="collapse"
//               aria-expanded="false"
//               className="dropdown-toggle nav-link"
//             >
//               <Icon className="fe fe-16" />
//               <span className="ml-3 item-text">{item.title}</span>
//               <span className="sr-only">(current)</span>
//             </a>

//             <ul
//               className="collapse list-unstyled pl-4 w-100"
//               id={item.title.toLowerCase()}
//             >
//               {item.child.map((child, cIndex) => {
//                 const ChildIcon = child.childicon;
//                 const isActive = location.pathname === child.childlink;
//                 return (
//                   <li
//                     className={`nav-item ${isActive ? "active" : ""}`}
//                     key={cIndex}
//                   >
//                     <Link className="nav-link pl-3" to={child.childlink}>
//                       <ChildIcon className="mr-2" />
//                       <span className="item-text">{child.childtitle}</span>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default Nav;

// Nav.js
// import { IoHomeOutline, IoAnalytics } from "react-icons/io5";
// import {
//   MdOutlineRestorePage,
//   MdOutlineSpaceDashboard,
//   MdOutlineSystemSecurityUpdateGood,
// } from "react-icons/md";
// import { CiShop } from "react-icons/ci";

// const menuItems = [
//   {
//     title: "Dashboard",
//     icon: IoHomeOutline,
//     link: "/",
//     child: [
//       {
//         childtitle: "Default",
//         childlink: "/",
//         childicon: MdOutlineRestorePage,
//       },
//       {
//         childtitle: "Analytics",
//         childlink: "/Analytics",
//         childicon: IoAnalytics,
//       },
//       {
//         childtitle: "E-commerce",
//         childlink: "/Ecommarce",
//         childicon: CiShop,
//       },
//       {
//         childtitle: "Sass Dashboard",
//         childlink: "/SaasDashboard",
//         childicon: MdOutlineSpaceDashboard,
//       },
//       {
//         childtitle: "Systems",
//         childlink: "/System",
//         childicon: MdOutlineSystemSecurityUpdateGood,
//       },
//     ],
//   },
// ];

// export default menuItems;


// src/Nav.js
import {
  IoHomeOutline,
  IoAnalytics,
} from "react-icons/io5";
import {
  MdOutlineRestorePage,
  MdOutlineSpaceDashboard,
  MdOutlineSystemSecurityUpdateGood,
  MdColorLens,
  MdTextFields,
  MdOutlineImage,
  MdOutlineSmartButton,
  MdNotifications,
  MdOutlineWindow,
  MdOutlineStorage,
  MdWidgets,
  MdOutlineCreditCard,
  MdOutlineFileUpload,
  MdOutlineGridView,
  MdOutlineBarChart,
  MdOutlineMap,
} from "react-icons/md";
import { CiShop } from "react-icons/ci";

const menuItems = [
  {
    title: "Dashboard",
    icon: IoHomeOutline,
    child: [
      { childtitle: "Default", childlink: "/", childicon: MdOutlineRestorePage },
      { childtitle: "Analytics", childlink: "/analytics", childicon: IoAnalytics },
      { childtitle: "E-commerce", childlink: "/ecommerce", childicon: CiShop },
      { childtitle: "Saas Dashboard", childlink: "/saas-dashboard", childicon: MdOutlineSpaceDashboard },
      { childtitle: "Systems", childlink: "/system", childicon: MdOutlineSystemSecurityUpdateGood },
    ],
  },
  {
    heading: "Components",
  },
  {
    title: "UI Elements",
    icon: MdWidgets,
    child: [
      { childtitle: "Colors", childlink: "/ui-color", childicon: MdColorLens },
      { childtitle: "Typography", childlink: "/ui-typograpy", childicon: MdTextFields },
      { childtitle: "Icons", childlink: "/ui-icons", childicon: MdOutlineImage },
      { childtitle: "Buttons", childlink: "/ui-buttons", childicon: MdOutlineSmartButton },
      { childtitle: "Notifications", childlink: "/ui-notification", childicon: MdNotifications },
      { childtitle: "Modals", childlink: "/ui-modals", childicon: MdOutlineWindow },
      { childtitle: "Tabs & Accordion", childlink: "/ui-tabs-accordion", childicon: MdOutlineStorage },
      { childtitle: "Progress", childlink: "/ui-progress", childicon: MdOutlineStorage },
    ],
  },
  {
    title: "Widgets",
    icon: MdWidgets,
    link: "/widgets",
    badge: "New",
  },
  {
    title: "Forms",
    icon: MdOutlineCreditCard,
    child: [
      {
        childtitle: "Basic Elements",
        childlink: "./BasicElements",
        childicon: FaDatabase,
      },
      {
        childtitle: "Advanced Elements",
        childlink: "./AdvancedElements",
        childicon: FaDatabase,
      },
      {
        childtitle: "Validation",
        childlink: "./Validation",
        childicon: FaDatabase,
      },
      {
        childtitle: "Wizard",
        childlink: "./FormWizard",
        childicon: FaDatabase,
      },
      {
        childtitle: "Layout",
        childlink: "student/id-card",
        childicon: FaDatabase,
      },
      {
        childtitle: "File upload",
        childlink: "student/reports",
        childicon: FaDatabase,
      },
      { childtitle: "Basic Elements", childlink: "/form_elements", childicon: MdOutlineGridView },
      { childtitle: "Advanced Elements", childlink: "/form_advanced", childicon: MdOutlineGridView },
      { childtitle: "Validation", childlink: "/form_validation", childicon: MdOutlineGridView },
      { childtitle: "Wizard", childlink: "/form_wizard", childicon: MdOutlineGridView },
      { childtitle: "Layouts", childlink: "/form_layouts", childicon: MdOutlineGridView },
      { childtitle: "File Upload", childlink: "/form_upload", childicon: MdOutlineFileUpload },
    ],
  },
  {
    title: "Tables",
    icon: MdOutlineGridView,
    child: [
      { childtitle: "Basic Tables", childlink: "/table_basic", childicon: MdOutlineGridView },
      { childtitle: "Advanced Tables", childlink: "/table_advanced", childicon: MdOutlineGridView },
      { childtitle: "Data Tables", childlink: "/table_datatables", childicon: MdOutlineGridView },
    ],
  },
  {
    title: "Charts",
    icon: MdOutlineBarChart,
    child: [
      { childtitle: "Inline Chart", childlink: "/chart-inline", childicon: MdOutlineBarChart },
      { childtitle: "Chartjs", childlink: "/chart-chartjs", childicon: MdOutlineBarChart },
      { childtitle: "ApexCharts", childlink: "/chart-apexcharts", childicon: MdOutlineBarChart },
      { childtitle: "Datamaps", childlink: "/datamaps", childicon: MdOutlineMap },
    ],
  },
];

export default menuItems;
