import { FaAlignJustify } from "react-icons/fa";
import { useState, useRef } from "react";

const navigationList = [
  {
    key: 1,
    nav: "Home",
    id: "#home",
  },
  {
    key: 2,
    nav: "About",
    id: "#about",
  },
  {
    key: 3,
    nav: "Skills",
    id: "#skills",
  },
  {
    key: 4,
    nav: "Projects",
    id: "#projects",
  },
  {
    key: 5,
    nav: "Contact",
    id: "#contact",
  },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const navContainer = useRef();

  const handleNavContainer = () => {
    navContainer.current.style.right = "0";
    setIsNavOpen(true);
  };

  const removeNav = () => {
    navContainer.current.style.right = "-100%";
    setIsNavOpen(false);
  };

  return (
    <header className="bg-bgColor w-[100vw] lg:px-[6rem] py-4 xl:px-[8.5rem] flex justify-between items-center fixed top-0 left-0 z-10 xs:px-[3%]">
      {/* Portfolio Logo & icon */}
      <div className="xs:flex xs:justify-between xs:w-full xs:items-center md:w-auto">
        <a href="#home" className="text-textColor text-[1.65rem] font-bold">
          Portfolio
        </a>
        <button>
          <FaAlignJustify
            onClick={handleNavContainer}
            className="text-xl md:hidden text-mainColor"
          />
        </button>
      </div>

      {/* Navbar List */}
      <nav
        className={`xs:fixed md:static xs:top-0 md:top-6 xs:right-[-100%] xs:min-h-[100vh] md:min-h-[2rem] xs:w-[55vw] sm:w-[40vw] md:w-auto xs:p-8 md:p-0 xs:bg-black/40 md:bg-transparent xs:backdrop-blur md:backdrop-blur-none xs:border-opacity-20 md:border-opacity-0 xs:shadow-md md:shadow-none md:flex md:items-center sm:mr-2 ${
          isNavOpen
            ? "transition-all duration-500"
            : "transition-all duration-500"
        }`}
        ref={navContainer}
      >
        <ul className="flex  md:gap-10 xs:flex-col xs:gap-5 md:flex-row">
          {navigationList.map((item) => (
            <li
              key={item.key}
              className="xs:p-1 md:p-0"
              onClick={() => {
                removeNav();
                handleClick(item.id);
              }}
            >
              <a
                className={`text-md hover:text-mainColor duration-500 ${
                  activeLink === item.id ? "text-mainColor" : ""
                }`}
                href={item.id}
              >
                {item.nav}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
