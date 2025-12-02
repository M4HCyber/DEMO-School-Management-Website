import { NavLink } from "react-router-dom";

function NavItem({ children, to }) {
  return (
    <li>
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}

export default NavItem;
