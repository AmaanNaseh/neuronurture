import React, { useRef, useEffect, useState } from "react";
import "./Quiz.css";
import { ScienceQuizData } from "./ScienceQuizData";
import CommonNav from "../NavFooter/CommonNav";
import CommonFooter from "../NavFooter/CommonFooter";

const ScienceQuiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(ScienceQuizData[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let optionArray = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      //execute 1st time as false
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setScore((prev) => prev + 1);
        setLock(true); //won't execute again as true
      } else {
        e.target.classList.add("wrong");
        setLock(true); //won't execute again as true
        optionArray[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const nextQuestion = () => {
    if (lock === true) {
      //next Q only when any answer given
      if (index === ScienceQuizData.length - 1) {
        setResult(true);
        return 0; //so it not execute remaining statement
      }
      setIndex(++index);
      setQuestion(ScienceQuizData[index]);
      setLock(false); //to click further ques
      optionArray.map((option) => {
        // to avoid right/wrong color display beforehand
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setQuestion(ScienceQuizData[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("NNScience");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("NNScience", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    var fileTime = new Date().toLocaleString();
    const dataObject = {
      score: item,
      date: fileTime,
    };

    setItems((prevItems) => [...prevItems, dataObject]);
  };

  return (
    <>
      <CommonNav />
      <div className="container">
        <h1>Science Quiz</h1>
        <hr />
        {result ? (
          <>
            <h2>
              You scored {score} our of {ScienceQuizData.length}
            </h2>
            <p className="text-xl font-bold text-red-700">
              Press Reset button to save score
            </p>
            <button
              onClick={() => {
                resetQuiz();
                addItem(score);
              }}
            >
              Reset
            </button>
          </>
        ) : (
          <>
            <h2>
              {index + 1}. {question.question}
            </h2>
            <ul>
              <li
                ref={option1}
                onClick={(e) => {
                  checkAns(e, 1);
                }}
              >
                {question.option1}
              </li>
              <li
                ref={option2}
                onClick={(e) => {
                  checkAns(e, 2);
                }}
              >
                {question.option2}
              </li>
              <li
                ref={option3}
                onClick={(e) => {
                  checkAns(e, 3);
                }}
              >
                {question.option3}
              </li>
              <li
                ref={option4}
                onClick={(e) => {
                  checkAns(e, 4);
                }}
              >
                {question.option4}
              </li>
            </ul>
            <button
              onClick={() => {
                nextQuestion();
              }}
            >
              Next
            </button>
            <div className="index">
              {index + 1} of {ScienceQuizData.length} questions
            </div>
          </>
        )}
      </div>
      <CommonFooter />
    </>
  );
};

export default ScienceQuiz;
