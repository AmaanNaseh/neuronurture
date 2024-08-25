import React from "react";
import { Link } from "react-router-dom";

const CommonFooter = () => {
  return (
    <>
      <footer className="flex flex-row justify-center items-center p-16 gap-32 sticky h-[15vh] bg-[#7FA1C3]">
        <div>
          <a
            href="https://linktr.ee/neuro_nurture"
            className="decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="text-black text-2xl font-bold">Contact</h1>
          </a>
        </div>
        <div>
          <Link to={"/about"}>
            <h1 className="text-black text-2xl font-bold">
              About NeuroDivergence
            </h1>
          </Link>
        </div>
        <div>
          <h1 className="text-black text-2xl font-bold">
            Developed by: Team Fretria
          </h1>
        </div>
      </footer>
    </>
  );
};

export default CommonFooter;
