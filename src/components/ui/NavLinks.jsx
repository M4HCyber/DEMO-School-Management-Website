import NavItem from "./NavItem";

function NavLinks() {
  return (
    <ul className="flex gap-10">
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </ul>
  );
}

export default NavLinks;
