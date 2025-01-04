import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeMenu = () => {
    setIsCollapsed(true);
  };
  return (
    <nav className="navbar bg-base-100" style={{ backgroundColor: "#fbb714" }}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Shelter" className="w-16" />
          </Link>
          <div className="md:hidden">
            <button
              type="button"
              className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
              onClick={toggleCollapse}
              aria-controls="logo-navbar-collapse"
              aria-label="Toggle navigation"
            >
              <span
                className={`icon-[tabler--menu-2] ${
                  !isCollapsed ? "hidden" : "block"
                } size-4`}
              />
              <span
                className={`icon-[tabler--x] ${
                  isCollapsed ? "hidden" : "block"
                } size-4`}
              />
            </button>
          </div>
        </div>
        <div
          id="logo-navbar-collapse"
          className={`md:flex  ${
            isCollapsed ? "hidden" : "block"
          } grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full justify-end`}
        >
          <ul
            className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2 font-bold font-title text-2xl space-y-4 md:space-y-0"
            style={{ backgroundColor: "#fbb714" }}
          >
<<<<<<< HEAD
=======
             <li><Link className="text-black" to="/">Home</Link></li>
            <li><Link className="text-black" to="/menu">Menu</Link></li> 
            {/*
>>>>>>> 721b1671779adee19dd37df38a0d0362da104c0a
            <li className="text-black">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="text-black">
              <Link to="/menu" onClick={closeMenu}>
                Menu
              </Link>
            </li>
            {/* <li className="text-black">
              <a href="/">Home</a>
            </li>
            <li className="text-black">
              <a href="/menu">Menu</a>
<<<<<<< HEAD
            </li> */}

=======
            </li>
*/}
>>>>>>> 721b1671779adee19dd37df38a0d0362da104c0a
            <li className="text-black">
              <a href="tel:19111">19111</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
