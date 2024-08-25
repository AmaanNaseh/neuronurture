import React from "react";
import CommonNav from "../Components/NavFooter/CommonNav";
import CommonFooter from "../Components/NavFooter/CommonFooter";
import { Link } from "react-router-dom";

const AiExercises = () => {
  return (
    <>
      <CommonNav />
      <div className="h-[75%]">
        <div className="flex flex-row flex-wrap gap-24 p-24">
          <div className="w-80 h-60 flex flex-col items-center justify-center hover:bg-blue-100 bg-blue-800 hover:text-blue-800 text-white p-12">
            <Link to={"/focus"}>
              <h1 className="font-bold text-3xl cursor-pointer">
                Brain Focus Enhancing Exercise
              </h1>
            </Link>
          </div>
          <div className="w-80 h-60 flex flex-col items-center justify-center hover:bg-blue-100 bg-blue-800 hover:text-blue-800 text-white px-auto">
            <Link to={"/exercise/voice"}>
              <h1 className="font-bold text-3xl cursor-pointer px-16">
                Voice Monitoring Exercise
              </h1>
            </Link>
          </div>
          <div className="w-80 h-60 flex flex-col items-center justify-center hover:bg-blue-100 bg-blue-800 hover:text-blue-800 text-white px-auto">
            <Link to={"/exercise/concentration"}>
              <h1 className="font-bold text-3xl cursor-pointer px-16">
                Visual Concentration Exercise
              </h1>
            </Link>
          </div>

          <div className="w-80 h-60 flex flex-col items-center justify-center hover:bg-blue-100 bg-blue-800 hover:text-blue-800 text-white px-auto pl-8">
            <Link to={"/pronounciation"}>
              <h1 className="font-bold text-3xl cursor-pointer">
                Pronounciation Learning Interface
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <CommonFooter />
    </>
  );
};

export default AiExercises;
