import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../Assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between items-center p-8 h-[10vh]">
        <div>
          {/* <img src={logo} alt="" className="w-full h-full" /> */}

          <Link to={"/"}>
            <h1 className="text-white font-bold text-3xl">NeuroNurture</h1>
          </Link>
        </div>
        <div>
          <ul className="list-none flex flex-row gap-8 text-white font-bold text-2xl">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/about"}>
              <li>About</li>
            </Link>

            <a
              href="https://linktr.ee/neuro_nurture"
              className="decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
