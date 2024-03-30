import { useState } from "react";
import logo from "../assets/logo.svg";
import iconMenu from "../assets/icon-menu.svg";
import iconMenuClose from "../assets/icon-close-menu.svg";
import Menu from "./Menu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div
        className={`relative left-0 top-0 w-full px-4 pt-5 md:flex md:items-center md:gap-8 md:px-10 lg:gap-14 ${
          isOpen && "z-10 h-screen cursor-pointer bg-AlmostBlack bg-opacity-60"
        }`}
      >
        <div>
          <img src={logo} alt="snap logo" />
        </div>

        <div
          className={`fixed right-0 top-0 w-2/3 gap-8 md:static md:w-full ${
            isOpen ? "z-20 flex h-screen" : "hidden md:block"
          }`}
        >
          <Menu />
        </div>

        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-4 top-4 z-20 focus:outline-none"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="toggle menu"
            aria-haspopup="true"
            tabIndex={0}
          >
            {isOpen ? (
              <img src={iconMenuClose} alt="close icon" className="z-20" />
            ) : (
              <img src={iconMenu} alt="hamburger menu icon" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
