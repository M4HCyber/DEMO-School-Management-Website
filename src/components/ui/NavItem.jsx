import { NavLink } from "react-router-dom";

function NavItem({ children, to }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-600" : "hover:text-blue-600"
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
