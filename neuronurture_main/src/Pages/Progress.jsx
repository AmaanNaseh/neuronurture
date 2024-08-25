import React from "react";
import CommonNav from "../Components/NavFooter/CommonNav";
import CommonFooter from "../Components/NavFooter/CommonFooter";
import { Link } from "react-router-dom";

const Progress = () => {
  const pronounciations = JSON.parse(localStorage.getItem("NNPro"));

  return (
    <>
      <CommonNav />
      <div className="h-[175vh] flex flex-row flex-wrap mt-12 mx-12 gap-8">
        <div className="w-[400px] h-[450px] flex flex-col items-center justify-start bg-blue-100 text-blue-800 px-12 pt-4 gap-12">
          <h1 className="font-bold text-3xl">Scores</h1>
          <Link to={"/english/score"}>
            <button className="text-blue-50 text-3xl font-semibold cursor-pointer bg-blue-800 hover:bg-blue-50 hover:text-blue-800 p-2 px-4 rounded-xl">
              English Scores
            </button>
          </Link>
          <Link to={"/maths/score"}>
            <button className="text-blue-50 text-3xl font-semibold cursor-pointer bg-blue-800 hover:bg-blue-50 hover:text-blue-800 p-2 px-4 rounded-xl">
              Maths Scores
            </button>
          </Link>
          <Link to={"/science/score"}>
            <button className="text-blue-50 text-3xl font-semibold cursor-pointer bg-blue-800 hover:bg-blue-50 hover:text-blue-800 p-2 px-4 rounded-xl">
              Science Scores
            </button>
          </Link>
        </div>

        <div className="w-[400px] h-[450px] flex flex-col items-center justify-start bg-blue-100 text-blue-800 px-12 pt-4 gap-12">
          <h1 className="font-bold text-3xl">
            Machine Learning Analysis based on Scores
          </h1>
          <Link to={"/progress/ml"}>
            <button className="text-blue-50 text-3xl font-semibold cursor-pointer bg-blue-800 hover:bg-blue-50 hover:text-blue-800 p-2 px-4 rounded-xl">
              Check ML Analysis
            </button>
          </Link>
        </div>
        <div className="w-[400px] h-[450px] flex flex-col items-center justify-start bg-blue-100 text-blue-800 px-12 pt-4">
          <h1 className="font-bold text-3xl cursor-pointer mb-2">
            Pronounciations Learnt
          </h1>
          <div>
            {pronounciations.map((pronounciation) => {
              return (
                <>
                  <div className="flex flex-row items-center gap-5">
                    <ul className="list-disc">
                      <li className="text-black font-bold py-1">
                        {pronounciation.word +
                          " (" +
                          pronounciation.date +
                          ") "}
                      </li>
                    </ul>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <CommonFooter />
    </>
  );
};

export default Progress;
