import React from "react";
import { Link } from "react-router-dom";
import ScienceVideo from "../Assets/ScienceVideo.mp4";
import CommonNav from "../Components/NavFooter/CommonNav";
import CommonFooter from "../Components/NavFooter/CommonFooter";

const SciencePage = () => {
  return (
    <>
      <CommonNav />
      <div className="flex flex-col justify-center items-center gap-8 py-12 h-[125vh]">
        <h1 className="text-green-900 font-bold text-5xl">
          Focus Test for Science
        </h1>
        <h3 className="text-green-900 font-bold text-3xl">
          Please go through the video, after completing it attempt the quiz.
        </h3>

        <div className="border-black border-4 h-[600px] w-[900px]">
          <video controls autoPlay className="w-full h-full">
            <source src={ScienceVideo} type="video/mp4" />
          </video>
        </div>
        <div>
          <Link to={"/science/quiz"}>
            <button className="text-blue-50 text-3xl font-semibold cursor-pointer bg-blue-800 hover:bg-blue-50 hover:text-blue-800 p-2 px-4 rounded-xl">
              Attempt Quiz
            </button>
          </Link>
        </div>
      </div>
      <CommonFooter />
    </>
  );
};

export default SciencePage;
