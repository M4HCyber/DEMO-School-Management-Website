import { HiBars3, HiXMark } from "react-icons/hi2";
import Buttons from "./Buttons";
import NavItem from "./NavItem";
import { useState } from "react";

function NavLinks() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  function handleClick() {
    setIsNavOpen((curr) => !curr);
  }
  return (
    <>
      <div
        onClick={handleClick}
        className="block cursor-pointer rounded-2xl p-2 text-3xl hover:bg-gray-100 hover:text-blue-600 md:hidden"
      >
        <HiBars3 />
      </div>
      <ul
        className={`${isNavOpen ? "translate-x-0" : "translate-x-full"} top-0 right-0 space-y-8 transition duration-700 ease-in-out max-md:absolute max-md:h-dvh max-md:w-[60%] max-md:bg-white max-md:p-10 max-md:text-lg md:flex md:gap-10`}
      >
        <span
          onClick={handleClick}
          className="flex cursor-pointer justify-end text-2xl hover:opacity-55 md:hidden"
        >
          <HiXMark />
        </span>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>

        <div className="flex flex-col items-center space-y-8 text-lg md:hidden">
          <NavItem to="/login" style="hover:text-gray-700 hover:opacity-90">
            Login
          </NavItem>
          <NavItem
            style="bg-gray-900 rounded-lg hover:text-white hover:opacity-90 text-white py-3 px-19"
            to="/login"
          >
            SignUp
          </NavItem>
        </div>
      </ul>
    </>
  );
}

export default NavLinks;
