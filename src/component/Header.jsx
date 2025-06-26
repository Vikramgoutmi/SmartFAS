//import { Navbar, Form, FormControl, Container, Image } from "react-bootstrap";
import { Navbar, Form, FormControl, Container, Image } from "react-bootstrap";
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
