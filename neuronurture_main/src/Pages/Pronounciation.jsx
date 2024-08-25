import React, { useEffect, useState } from "react";
import CommonNav from "../Components/NavFooter/CommonNav";
import CommonFooter from "../Components/NavFooter/CommonFooter";

const Pronounciation = () => {
  const [text, setText] = useState("Please type any word");

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("NNPro");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("NNPro", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    var fileTime = new Date().toLocaleString();
    const dataObject = {
      word: item,
      date: fileTime,
    };

    setItems((prevItems) => [...prevItems, dataObject]);
  };
  return (
    <>
      <CommonNav />
      <div className="h-[75vh] flex flex-col justify-center items-center gap-16">
        <h1 className="text-red-900 font-bold text-4xl">
          Pronounciation learning
        </h1>
        <input
          className="w-80 h-12 border-4 text-center border-red-700 text-3xl"
          type="text"
          name="text"
          id="text"
          placeholder="Enter the word"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          className="text-blue-50 text-3xl font-semibold cursor-pointer bg-blue-800 hover:bg-blue-50 hover:text-blue-800 p-2 px-4 rounded-xl"
          onClick={() => {
            const utterance = new SpeechSynthesisUtterance(text);
            const voices = speechSynthesis.getVoices();
            utterance.voice = voices[0];
            speechSynthesis.speak(utterance);
            addItem(text);
          }}
        >
          Check Pronounciation
        </button>
      </div>
      <CommonFooter />
    </>
  );
};

export default Pronounciation;
