import React from "react";
import CommonNav from "../Components/NavFooter/CommonNav";
import CommonFooter from "../Components/NavFooter/CommonFooter";
import EvaluationAccuracy from "../Assets/Evaluation Accuracy.png";
import EvaluationGraphs from "../Assets/Evaluation Graphs.jpeg";

const ProgressML = () => {
  return (
    <>
      <CommonNav />
      <div className="h-[150vh]">
        <div className="flex flex-row flex-wrap mt-12 mx-12 gap-12">
          <div className="w-full h-[450px] flex flex-col items-center justify-start bg-blue-100 text-blue-800 px-12 pt-4 gap-12">
            <h1 className="font-bold text-3xl">ML Model Results</h1>
            <div className="flex flex-row flex-wrap gap-12">
              <div>
                <ul className="flex flex-col gap-2 list-disc font-semibold text-red-700 pt-3">
                  <li>Models are</li>
                  <li>LR: Logistic Regression</li>
                  <li>LDA: Linear Discriminant Analysis</li>
                  <li>KNN: K Nearest Neighbors Classifier</li>
                  <li>NB: Gaussian Naive Baeyes</li>
                  <li>CARD: Decision Tree Classifier</li>
                  <li>SVM: Support Vector Machine Classifier</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-red-700">
                  Accuracy of ML models (value = %/100)
                </h1>
                <img src={EvaluationAccuracy} alt="..." className="w-72 h-72" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-red-700">
                  Accuracy Comparison of ML models
                </h1>
                <img src={EvaluationGraphs} alt="..." className="w-96 h-72" />
              </div>
            </div>
          </div>

          <div className="w-[400px] h-[450px] flex flex-col items-center justify-start bg-blue-100  px-12 pt-4 gap-12">
            <h1 className="font-bold text-3xl text-blue-800">
              Score Analysis by ML
            </h1>
            <p className="text-black text-xl text-justify font-semibold">
              <span className="text-red-800 font-bold mx-1">Score 1-3:</span>{" "}
              Poor results may arose due to presence of Autism, Dyscalculia,
              Dysgraphia and Dyslexia.
            </p>
            <p className="text-black text-xl text-justify font-semibold">
              <span className="text-red-800 font-bold mx-1">Score 4: </span>
              Needs more practice for better performance.
            </p>
          </div>

          <div className="w-[400px] h-[450px] flex flex-col items-center justify-start bg-blue-100 text-blue-800 px-12 pt-4 gap-7">
            <h1 className="font-bold text-3xl">Possible Solutions</h1>
            <p className="text-black text-xl text-justify font-semibold">
              <span className="text-red-800 font-bold mx-1">
                For severe Dyscalculia, Dysgraphia and Dyslexia:
              </span>{" "}
              Practice out the mind quiz exercise given in this website.
            </p>
            <p className="text-black text-xl text-justify font-semibold">
              <span className="text-red-800 font-bold mx-1">For autism: </span>
              Practice out visual exercise, speech/pitch exercise and
              pronounciation exercise given in this website.
            </p>
          </div>
        </div>
      </div>
      <CommonFooter />
    </>
  );
};

export default ProgressML;
