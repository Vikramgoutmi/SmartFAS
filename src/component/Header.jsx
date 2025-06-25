
// import { Navbar, Form, FormControl, Container, Image } from "react-bootstrap";
// import {
//   FaBars,
//   FaSearch,
//   FaRegMoon,
//   FaThLarge,
//   FaBell,
// } from "react-icons/fa";
// const Header = () => {
//   return (
//     <>
//      <Navbar bg="light" className="py-2 shadow-sm">
//       <Container fluid className="d-flex align-items-center justify-content-between">
//         {/* Left Section: Logo & Hamburger */}
//         <div className="d-flex align-items-center">
         
//           <FaBars size={18} className="text-secondary" />
//         </div>

//         {/* Center Section: Search */}
//         <Form className="d-flex mx-3 flex-grow-1">  
//           <FaSearch className="me-2 mt-2 text-muted" />
//           <FormControl
//             type="search"
//             placeholder="Type something..."
//             className="me-2 border-0 shadow-none"
//             style={{ backgroundColor: "transparent" }}
//           />
//         </Form>

//         {/* Right Section: Icons and Avatar */}
//         <div className="d-flex align-items-center gap-3">
//           <FaRegMoon className="text-muted" />
//           <FaThLarge className="text-muted" />
//           <div className="position-relative">
//             <FaBell className="text-muted" />
//             <span
//               className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle"
//               style={{ width: "8px", height: "8px" }}
//             ></span>
//           </div>
    
//             <div className="dropdown">
//             <a
//               href="#"
//               className="d-flex align-items-center text-decoration-none dropdown-toggle"
//               id="profileDropdown"
//               role="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               <img
//                 src="https://i.pravatar.cc/36?img=10"
//                 alt="profile"
//                 width="40"
//                 height="40"
//                 className="rounded-circle"
//               />
//             </a>
//             <ul
//               className="dropdown-menu dropdown-menu-end"
//               aria-labelledby="profileDropdown"
//             >
//               <li>
//                 <a className="dropdown-item" href="/profile">
//                   My Profile
//                 </a>
//               </li>
//               <li>
//                 <a className="dropdown-item" href="/settings">
//                   Settings
//                 </a>
//               </li>
//               <li>
//                 <hr className="dropdown-divider" />
//               </li>
//               <li>
//                 <a className="dropdown-item" href="/logout">
//                   Logout
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </Container>
//     </Navbar>
//     </>
//   );
// };

// export default Header;



//import { Navbar, Form, FormControl, Container, Image } from "react-bootstrap";
import { Navbar,Form, FormControl, Container, Image } from "react-bootstrap";
import {
  FaSun,
  FaThLarge,
  FaBell,
  FaSearch,
  FaBars,
} from "react-icons/fa";

const Header = () => {
  return (
    <nav className="topnav navbar navbar-light">
      {/* Sidebar Toggle */}
      <button
        type="button"
        className="navbar-toggler text-muted mt-2 p-0 me-3 collapseSidebar"
      >
        <FaBars className="navbar-toggler-icon" />
      </button>

      {/* Search Form */}
      <form className="form-inline me-auto searchform text-muted">
        <input
          className="form-control me-sm-2 bg-transparent border-0 ps-4 text-muted"
          type="search"
          placeholder="Type something..."
          aria-label="Search"
        />
      </form>

      {/* Right Nav Icons */}
      <ul className="nav">
        {/* Theme Switcher */}
        <li className="nav-item">
          <a className="nav-link text-muted my-2" href="#" id="modeSwitcher" data-mode="dark">
            <FaSun className="fe-16" />
          </a>
        </li>

        {/* Grid Shortcut Icon */}
        <li className="nav-item">
          <a
            className="nav-link text-muted my-2"
            href="#"
            data-bs-toggle="modal"
            data-bs-target=".modal-shortcut"
          >
            <FaThLarge className="fe-16" />
          </a>
        </li>

        {/* Notification Bell */}
        <li className="nav-item nav-notif position-relative">
          <a
            className="nav-link text-muted my-2"
            href="#"
            data-bs-toggle="modal"
            data-bs-target=".modal-notif"
          >
            <FaBell className="fe-16" />
            <span className="dot dot-md bg-success position-absolute top-0 start-100 translate-middle"></span>
          </a>
        </li>

        {/* Profile Avatar */}
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-muted pe-0"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="avatar avatar-sm mt-2">
              <img
                src="./assets/avatars/face-1.jpg"
                alt="avatar"
                className="avatar-img rounded-circle"
                width={36}
                height={36}
              />
            </span>
          </a>
          {/* Dropdown items can go here if needed */}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
