import React from "react";
import { Link } from "react-router-dom";
import CommonNav from "../Components/NavFooter/CommonNav";
import CommonFooter from "../Components/NavFooter/CommonFooter";

const Focus = () => {
  return (
    <>
      <CommonNav />
      <div className="h-[75vh]">
        <div className="flex flex-row flex-wrap gap-24 p-24">
          <div className="w-80 h-60 flex flex-col items-center justify-center hover:bg-blue-100 bg-blue-800 hover:text-blue-800 text-white px-auto">
            <Link to={"/science"}>
              <h1 className="font-bold text-5xl cursor-pointer">Science</h1>
            </Link>
          </div>
          <div className="w-80 h-60 flex flex-col items-center justify-center hover:bg-blue-100 bg-blue-800 hover:text-blue-800 text-white px-auto">
            <Link to={"/maths"}>
              <h1 className="font-bold text-5xl cursor-pointer">Maths</h1>
            </Link>
          </div>
          <div className="w-80 h-60 flex flex-col items-center justify-center hover:bg-blue-100 bg-blue-800 hover:text-blue-800 text-white px-auto">
            <Link to={"/english"}>
              <h1 className="font-bold text-5xl cursor-pointer">English</h1>
            </Link>
          </div>
        </div>
      </div>
      <CommonFooter />
    </>
  );
};

export default Focus;
