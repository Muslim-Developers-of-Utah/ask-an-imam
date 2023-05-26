import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar bg-base-100">
      <span className="btn btn-ghost normal-case text-3xl">Ask An Imam</span>
      <button className="btn btn-square btn-ghost lg:hidden"
      type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-5 h-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto navbar-end`}
        >
          <ul className="menu menu-horizontal px-1">
            <li>
              <button className="btn btn-ghost" type="button">Ask</button>
            </li>
            <li>
              <button className="btn btn-ghost" type="button">Login</button>
            </li>
            <li>
              <button className="btn btn-ghost" type="button">Sign Up</button>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default NavBar;
