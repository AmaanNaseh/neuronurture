import React from "react";
import CommonNav from "../Components/NavFooter/CommonNav";
import CommonFooter from "../Components/NavFooter/CommonFooter";

const ScienceScore = () => {
  const scores = JSON.parse(localStorage.getItem("NNScience"));

  return (
    <>
      <CommonNav />
      <div className="h-[150vh]">
        <div className="px-12 py-8 flex flex-row flex-wrap gap-8">
          <div className="w-96">
            <h1 className="font-bold text-3xl text-blue-800">Science Scores</h1>
            {scores.map((score) => {
              return (
                <>
                  <div className="flex flex-row items-center gap-5">
                    <ul className="list-disc">
                      <li className="text-black font-bold py-1">
                        {score.score + " (" + score.date + ") "}
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

export default ScienceScore;
