import Buttons from "./ui/Buttons";
import Logo from "./ui/Logo";
import NavLinks from "./ui/NavLinks";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-white px-18 py-2 font-semibold shadow-lg">
      <Logo />
      <NavLinks />
      <Buttons />
    </div>
  );
}

export default Header;
