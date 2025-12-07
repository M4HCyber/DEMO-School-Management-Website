import Buttons from "./ui/Buttons";
import Logo from "./ui/Logo";
import NavLinks from "./ui/NavLinks";

function Header() {
  return (
    <div className="sticky top-0 z-100 flex items-center justify-between bg-white px-10 py-2 font-semibold shadow-lg transition duration-700 ease-in-out lg:px-18">
      <Logo />
      <NavLinks />
      <Buttons />
    </div>
  );
}

export default Header;
