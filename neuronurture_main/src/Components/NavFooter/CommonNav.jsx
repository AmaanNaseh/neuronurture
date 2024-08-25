import React from "react";
import { Link } from "react-router-dom";

const CommonNav = () => {
  return (
    <>
      <nav className="flex flex-row justify-between items-center p-8 h-[10vh] bg-[#A7E6FF]">
        <div>
          <Link to={"/"}>
            <h1 className="text-black font-bold text-3xl">NeuroNurture</h1>
          </Link>
        </div>
        <div>
          <ul className="decoration-none flex flex-row gap-8 text-black font-bold text-2xl">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/about"}>
              <li>About</li>
            </Link>
            <a
              href="https://linktr.ee/neuro_nurture"
              className="list-none"
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

export default CommonNav;
