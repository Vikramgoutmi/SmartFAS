import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import menuItems from "../nav.js";
import { NavLink } from "react-router";
// import { LuLayoutDashboard } from "react-icons/lu";

function Navbar() {
  console.log(menuItems);
  return (
    <Sidebar  >
      <Menu>
        {menuItems.map((curElem, index) => {
          const SideBarIcon = curElem.icon;
          console.log(SideBarIcon);
          return (
            <>
              <SubMenu  key={index} label={curElem.title} icon={<SideBarIcon />}>
                {curElem.child &&
                  curElem.child.map((childItem, childIndex) => (
                    <MenuItem cla key={childIndex}>
                      <NavLink
                        className={({ isActive }) =>
                          `nav-link ${
                            isActive ? "text-primary fw-bold" : "text-dark"
                          }`
                        }
                        to={childItem.childlink}
                      >
                        {childItem.childtitle}
                      </NavLink>
                    </MenuItem>
                  ))}
                {!curElem.child && <MenuItem>{curElem.title}</MenuItem>}
              </SubMenu>
            </>
          );
        })}
      </Menu>
    </Sidebar>
  );
}

export default Navbar;
