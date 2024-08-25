import React from "react";
import CommonNav from "../Components/NavFooter/CommonNav";
import CommonFooter from "../Components/NavFooter/CommonFooter";
import Infinity from "../Assets/Infinity.mp4";

const VisualExercise = () => {
  return (
    <>
      <CommonNav />
      <div className="h-[75vh] flex flex-col items-center justify-center">
        <h1 className="text-green-900 font-bold text-3xl">
          Follow the light in the video for 30 seconds to strengthen your visual
          concentration
        </h1>
        <div className=" h-[400px] w-[600px]">
          <video controls autoPlay className="w-full h-full">
            <source src={Infinity} type="video/mp4" />
          </video>
        </div>
      </div>
      <CommonFooter />
    </>
  );
};

export default VisualExercise;
