
import { Navbar, Form, FormControl, Container, Image } from "react-bootstrap";
import {
  FaBars,
  FaSearch,
  FaRegMoon,
  FaThLarge,
  FaBell,
} from "react-icons/fa";
const Header = () => {
  return (
    <>
     <Navbar bg="light" className="py-2 shadow-sm">
      <Container fluid className="d-flex align-items-center justify-content-between">
        {/* Left Section: Logo & Hamburger */}
        <div className="d-flex align-items-center">
         
          <FaBars size={18} className="text-secondary" />
        </div>

        {/* Center Section: Search */}
        <Form className="d-flex mx-3 flex-grow-1">
          <FaSearch className="me-2 mt-2 text-muted" />
          <FormControl
            type="search"
            placeholder="Type something..."
            className="me-2 border-0 shadow-none"
            style={{ backgroundColor: "transparent" }}
          />
        </Form>

        {/* Right Section: Icons and Avatar */}
        <div className="d-flex align-items-center gap-3">
          <FaRegMoon className="text-muted" />
          <FaThLarge className="text-muted" />
          <div className="position-relative">
            <FaBell className="text-muted" />
            <span
              className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle"
              style={{ width: "8px", height: "8px" }}
            ></span>
          </div>
    
            <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dropdown-toggle"
              id="profileDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://i.pravatar.cc/36?img=10"
                alt="profile"
                width="40"
                height="40"
                className="rounded-circle"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="profileDropdown"
            >
              <li>
                <a className="dropdown-item" href="/profile">
                  My Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/settings">
                  Settings
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/logout">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;


  // <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
  //       <div className="container-fluid">
  //         {/* Logo */}
  //         <a className="navbar-brand" href="/">
  //           <img
  //             src={image}
  //             alt="logo"
  //             width="30"
  //             height="30"
  //             className="me-2"
  //           />
  //         </a>
  //         <h1>Logo</h1>
  //         {/* Search Bar */}
  //         <form className="d-flex mx-auto w-50">
  //           <input
  //             className="form-control me-2"
  //             type="search"
  //             placeholder="Search..."
  //             aria-label="Search"
  //           />
  //           <button className="btn btn-outline-primary" type="submit">
  //             Search
  //           </button>
  //         </form>

  //         {/* Profile Dropdown */}
  //         <div className="dropdown">
  //           <a
  //             href="#"
  //             className="d-flex align-items-center text-decoration-none dropdown-toggle"
  //             id="profileDropdown"
  //             role="button"
  //             data-bs-toggle="dropdown"
  //             aria-expanded="false"
  //           >
  //             <img
  //               src={image}
  //               alt="profile"
  //               width="40"
  //               height="40"
  //               className="rounded-circle"
  //             />
  //           </a>
  //           <ul
  //             className="dropdown-menu dropdown-menu-end"
  //             aria-labelledby="profileDropdown"
  //           >
  //             <li>
  //               <a className="dropdown-item" href="/profile">
  //                 My Profile
  //               </a>
  //             </li>
  //             <li>
  //               <a className="dropdown-item" href="/settings">
  //                 Settings
  //               </a>
  //             </li>
  //             <li>
  //               <hr className="dropdown-divider" />
  //             </li>
  //             <li>
  //               <a className="dropdown-item" href="/logout">
  //                 Logout
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>