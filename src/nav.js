import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineRestorePage } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { FaInbox } from "react-icons/fa6";
import { MdInvertColors } from "react-icons/md";
import { TbFileTypography } from "react-icons/tb";
import { TbIconsFilled } from "react-icons/tb";
import { IoIosRadioButtonOn } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { SiModal } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { CiViewTable } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FaRegFile } from "react-icons/fa6";
import { SiRustdesk } from "react-icons/si";
import { RiPagesLine } from "react-icons/ri";
import { SiAegisauthenticator } from "react-icons/si";
import { FiLayout } from "react-icons/fi";
import { CiCircleQuestion } from "react-icons/ci";

// components

const menuItems = [
  {
    title: "Dashboard",
    icon: IoHomeOutline,
    link: "/",
    child: [
      {
        childtitle: "Default",
        childlink: "./",
        childicon: MdOutlineRestorePage,
      },
      {
        childtitle: "Analytics",
        childlink: "./Analytics",
        childicon: IoAnalytics,
      },
      {
        childtitle: "E-commerce",
        childlink: "./Ecommarce",
        childicon: CiShop,
      },
      {
        childtitle: "Sass Dashboard",
        childlink: "./SaasDashboard",
        childicon: MdOutlineSpaceDashboard,
      },
      {
        childtitle: "Systems",
        childlink: "./System",
        childicon: MdOutlineSystemSecurityUpdateGood,
      },
    ],
  },
  {
    title: "UI elements",
    icon: FaInbox,
    link: "",
    child: [
      {
        childtitle: "Colors",
        childlink: "./color",
        childicon: MdInvertColors,
      },

      {
        childtitle: "Typography",
        childlink: "./typography",
        childicon: TbFileTypography,
      },

      {
        childtitle: "IconGallery",
        childlink: "./IconGallery",
        childicon: TbIconsFilled,
      },

      {
        childtitle: "Buttons",
        childlink: "student/registerStudent",
        childicon: IoIosRadioButtonOn,
      },

      {
        childtitle: "Notifications",
        childlink: "student/registerStudent",
        childicon: IoIosNotifications,
      },

      {
        childtitle: "Modals",
        childlink: "student/registerStudent",
        childicon: SiModal,
      },

      {
        childtitle: "Tabs & Accordion",
        childlink: "student/registerStudent",
        childicon: FaDatabase,
      },
    ],
  },
  {
    title: "Widgets",
    icon: FaDatabase,
    link: "dashboard",
  },
  {
    title: "Forms",
    icon: FaWpforms,
    link: "",
    child: [
      {
        childtitle: "Basic Elements",
        childlink: "student/registerStudent",
        childicon: FaDatabase,
      },
      {
        childtitle: "Advanced Elements",
        childlink: "student/view",
        childicon: FaDatabase,
      },
      {
        childtitle: "Validation",
        childlink: "student/assign-room",
        childicon: FaDatabase,
      },
      {
        childtitle: "Wizard",
        childlink: "student/checkin-checkout",
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
    ],
  },
  {
    title: "Tables",
    icon: CiViewTable,
    link: "",
    child: [
      {
        childtitle: "Basic Tables",
        childlink: "student/registerStudent",
        childicon: FaDatabase,
      },
      {
        childtitle: "Advanced Tables",
        childlink: "student/view",
        childicon: FaDatabase,
      },
      {
        childtitle: "Data Tables",
        childlink: "student/assign-room",
        childicon: FaDatabase,
      },
    ],
  },
  {
    title: "Calendar",
    icon: FaCalendarAlt,
    link: "dashboard",
  },

  {
    title: "Charts",
    icon: FaChartSimple,
    link: "",
    child: [
      {
        childtitle: "Inline Chart",
        childlink: "student/registerStudent",
        childicon: FaDatabase,
      },
      {
        childtitle: "Chartjs",
        childlink: "student/view",
        childicon: FaDatabase,
      },
      {
        childtitle: "ApexCharts",
        childlink: "student/assign-room",
        childicon: FaDatabase,
      },
      {
        childtitle: "Datamaps",
        childlink: "student/assign-room",
        childicon: FaDatabase,
      },
    ],
  },
  {
    title: "Contacts",
    icon: IoMdContacts,
    link: "",
    child: [
      {
        childtitle: "Contact List",
        childlink: "student/registerStudent",
        childicon: FaDatabase,
      },
      {
        childtitle: "Contact Grid",
        childlink: "student/view",
        childicon: FaDatabase,
      },
      {
        childtitle: "New Contact",
        childlink: "student/assign-room",
        childicon: FaDatabase,
      },
    ],
  },
  {
    title: "Profile",
    icon: ImProfile,
    link: "",
    child: [
      {
        childtitle: "Overview",
        childlink: "student/registerStudent",
        childicon: FaDatabase,
      },
      {
        childtitle: "Settings",
        childlink: "student/view",
        childicon: FaDatabase,
      },
      {
        childtitle: "Security",
        childlink: "student/assign-room",
        childicon: FaDatabase,
      },
      {
        childtitle: "Notifications",
        childlink: "student/assign-room",
        childicon: FaDatabase,
      },
    ],
  },
  {
    title: "File Manager",
    icon: FaRegFile,
    link: "",
    child: [
      {
        childtitle: "Files List",
        childlink: "student/registerStudent",
        childicon: FaDatabase,
      },
      {
        childtitle: "Files Grid",
        childlink: "student/view",
        childicon: FaDatabase,
      },
    ],
  },
  {
    title: "Help Desk",
    icon: SiRustdesk,
    link: "",
    child: [
      {
        childtitle: "Home",
        childlink: "student/registerStudent",
        childicon: FaDatabase,
      },
      {
        childtitle: "Tickets",
        childlink: "student/view",
        childicon: FaDatabase,
      },
      {
        childtitle: "Ticket Detail",
        childlink: "student/view",
        childicon: FaDatabase,
      },
      {
        childtitle: "FAQs",
        childlink: "student/view",
        childicon: FaDatabase,
      },
    ],
  },

  {
    title: "Pages",
    icon: RiPagesLine,
    link: "",
    child: [
      {
        childtitle: "Orders",
        childlink: "student/registerStudent",
        childicon: FaDatabase,
      },
      {
        childtitle: "Timeline",
        childlink: "student/view",
        childicon: FaDatabase,
      },
      {
        childtitle: "Invoice",
        childlink: "student/view",
        childicon: FaDatabase,
      },
      {
        childtitle: "Page 404",
        childlink: "student/view",
        childicon: FaDatabase,
      },
      {
        childtitle: "Page 500",
        childlink: "student/view",
        childicon: FaDatabase,
      },
      {
        childtitle: "Blank",
        childlink: "student/view",
        childicon: FaDatabase,
      },
    ],
  },
  {
    title: "Authentication",
    icon: SiAegisauthenticator,
    link: "",
    child: [
      {
        childtitle: "Login 1",
        childlink: "student/registerStudent",
        childicon: FaDatabase,
      },
      {
        childtitle: "Login 2",
        childlink: "student/view",
        childicon: FaDatabase,
      },
      {
        childtitle: "Register",
        childlink: "student/view",
        childicon: FaDatabase,
      },
      {
        childtitle: "Reset Password",
        childlink: "student/view",
        childicon: FaDatabase,
      },
      {
        childtitle: "Confirm Password",
        childlink: "student/view",
        childicon: FaDatabase,
      },
    ],
  },

  {
    title: "Layout",
    icon: FiLayout,
    link: "",
    child: [
      {
        childtitle: "Default",
        childlink: "student/registerStudent",
        childicon: FaDatabase,
      },
      {
        childtitle: "Top Navigation",
        childlink: "student/view",
        childicon: FaDatabase,
      },
      {
        childtitle: "Boxed",
        childlink: "student/view",
        childicon: FaDatabase,
      },
    ],
  },

  {
    title: "Getting Start",
    icon: CiCircleQuestion,
    link: "",
  },

  // error
];

export default menuItems;
