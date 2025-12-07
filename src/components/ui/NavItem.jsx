import { NavLink } from "react-router-dom";

function NavItem({ children, to, style }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          `flex items-center transition-all ${style} ${
            isActive ? "text-blue-600 " : " hover:text-blue-600"
          }`
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
