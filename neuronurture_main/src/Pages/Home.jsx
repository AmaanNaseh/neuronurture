import React from "react";
import { Link } from "react-router-dom";
import CommonNav from "../Components/NavFooter/CommonNav";
import CommonFooter from "../Components/NavFooter/CommonFooter";

const Home = () => {
  return (
    <>
      <CommonNav />
      <div className="h-[75vh]">
        <div className="flex flex-row flex-wrap gap-20 p-20">
          {/* <div className="w-64 h-52 flex flex-col items-center justify-center hover:bg-blue-100 bg-blue-800 hover:text-blue-800 text-white p-12">
            <Link to={"/sensory-overload"}>
              <h1 className=" font-bold text-5xl cursor-pointer">
                Sensory Overload
              </h1>
            </Link>
          </div> */}

          <div className="w-80 h-60 flex flex-col items-center justify-center hover:bg-blue-100 bg-blue-800 hover:text-blue-800 text-white p-12">
            <Link to={"/aiexercises"}>
              <h1 className=" font-bold text-5xl cursor-pointer">
                Personalized Learning Exercises
              </h1>
            </Link>
          </div>
          <div className="w-80 h-60 flex flex-col items-center justify-center hover:bg-blue-100 bg-blue-800 hover:text-blue-800 text-white p-12">
            <Link to={"/progress"}>
              <h1 className=" font-bold text-5xl cursor-pointer">
                Check your progress
              </h1>
            </Link>
          </div>
          <div className="w-80 h-60 flex flex-col items-center justify-center hover:bg-blue-100 bg-blue-800 hover:text-blue-800 text-white p-12">
            <Link to={"/about"}>
              <h1 className=" font-bold text-5xl cursor-pointer">
                About Neuro-Divergence
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <CommonFooter />
    </>
  );
};

export default Home;
