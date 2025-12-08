import { NavLink } from "react-router-dom";
import { useHome } from "../../contexts/HomeContext";

function NavItem({ children, to, style }) {
  const { handleClick } = useHome();
  return (
    <li>
      <NavLink
        onClick={handleClick}
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
