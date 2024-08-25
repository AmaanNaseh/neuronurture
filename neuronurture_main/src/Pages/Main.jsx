import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../Components/NavFooter/Navbar";
import Footer from "../Components/NavFooter/Footer";
import Background from "./Background";

// import Arrow from "../Assets/Arrow.png";

const Main = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => {
        return count === 3 ? 0 : count + 1;
      });
    }, 3000);
  });

  return (
    <>
      <Navbar />
      <div className="h-[60vh]">
        <Background count={count} />
        <div className="flex flex-col items-center justify-center mt-32">
          <h1 className="text-red-900 font-bold text-8xl">NeuroNurture</h1>
          <h1 className="text-red-900 font-bold text-8xl">
            An Adaptive Learning
          </h1>
          <h1 className="text-red-900 font-bold text-8xl">Platform</h1>

          <div className=" mt-24">
            <Link to={"/home"}>
              <button className="text-blue-50 text-3xl font-semibold cursor-pointer bg-blue-800 hover:bg-blue-50 hover:text-blue-800 p-2 px-4 rounded-xl">
                Open Interface
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
