// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import menuItems from "../Nav.js"
// // import menuItem from "../Nav.jsx";
// import { NavLink } from "react-router";
// // import { LuLayoutDashboard } from "react-icons/lu";

// function Navbar() {
//   console.log(menuItems);
//   return (
//     <Sidebar  >
//       <Menu>
//         {menuItems.map((curElem, index) => {
//           const SideBarIcon = curElem.icon;
//           console.log(SideBarIcon);
//           return (
//             <>
//               <SubMenu key={index} label={curElem.title} icon={<SideBarIcon />}>
//                 {curElem.child &&
//                   curElem.child.map((childItem, childIndex) => (
//                     <MenuItem cla key={childIndex}>
//                       <NavLink
//                         className={({ isActive }) =>
//                           `nav-link ${isActive ? "text-primary fw-bold" : "text-dark"
//                           }`
//                         }

//                         to={childItem.childlink}
//                       >
//                         {childItem.childtitle}
//                       </NavLink>
//                     </MenuItem>
//                   ))}
//                 {!curElem.child && <MenuItem>{curElem.title}</MenuItem>}
//               </SubMenu>
//             </>
//           );
//         })}
//       </Menu>
//     </Sidebar>
//   );
// }

// export default Navbar;



// import React from "react";
// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import menuItems from "../Nav.js";
// //import menuItems from "../Nav.js"; // Assuming Nav.js exports menuItems
// import { NavLink } from "react-router-dom"; // Correct package

// function Navbar() {
//   return (
//     <Sidebar>
//       <Menu>
//         {menuItems.map((curElem, index) => {
//           const SideBarIcon = curElem.icon;
//           return (
//             <SubMenu
//               key={index}
//               label={curElem.title}
//               icon={<SideBarIcon />}
//             >
//               {curElem.child && curElem.child.length > 0 ? (
//                 curElem.child.map((childItem, childIndex) => {
//                   const ChildIcon = childItem.childicon;
//                   return (
//                     <MenuItem key={childIndex} icon={<ChildIcon />}>
//                       <NavLink
//                         to={childItem.childlink}
//                         className={({ isActive }) =>
//                           `nav-link ${isActive ? "text-primary fw-bold" : "text-dark"}`
//                         }
//                       >
//                         {childItem.childtitle}
//                       </NavLink>
//                     </MenuItem>
//                   );
//                 })
//               ) : (
//                 <MenuItem>{curElem.title}</MenuItem>
//               )}
//             </SubMenu>
//           );
//         })}
//       </Menu>
//     </Sidebar>
//   );
// }

// export default Navbar;


// src/components/Navbar.jsx

import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { NavLink, useLocation } from "react-router-dom";
import menuItems from "../nav.js";


const Navbar = () => {
  const location = useLocation();

  return (
    <Sidebar>
      <Menu>
        {menuItems.map((curElem, index) => {
          // Render section heading
          if (curElem.heading) {
            return (
              <p className="text-muted nav-heading mt-4 mb-1" key={index}>
                <span>{curElem.heading}</span>
              </p>
            );
          }

          const Icon = curElem.icon;

          // Render submenu with children
          if (curElem.child && curElem.child.length > 0) {
            return (
              <SubMenu key={index} label={curElem.title} icon={Icon && <Icon />}>
                {curElem.child.map((childItem, childIndex) => {
                  const ChildIcon = childItem.childicon;
                  return (
                    <MenuItem key={childIndex} icon={ChildIcon && <ChildIcon />}>
                      <NavLink
                        to={childItem.childlink}
                        className={({ isActive }) =>
                          `nav-link ${isActive ? "text-primary fw-bold" : "text-dark"}`
                        }
                      >
                        {childItem.childtitle}
                      </NavLink>
                    </MenuItem>
                  );
                })}
              </SubMenu>
            );
          }

          // Render single-level link
          return (
            <MenuItem key={index} icon={Icon && <Icon />}>
              <NavLink
                to={curElem.link}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-primary fw-bold" : "text-dark"}`
                }
              >
                {curElem.title}
                {curElem.badge && (
                  <span className="badge badge-pill badge-primary ml-2">
                    {curElem.badge}
                  </span>
                )}
              </NavLink>
            </MenuItem>
          );
        })}
      </Menu>
    </Sidebar>
  );
};

export default Navbar;
