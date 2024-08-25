import React from "react";

const Background = ({ count }) => {
  if (count === 0) {
    return (
      <img
        src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="..."
        className="h-full w-full fixed opacity-65"
        style={{ zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}
      />
    );
  } else if (count === 1) {
    return (
      <img
        src="https://cdn.pixabay.com/photo/2018/09/04/10/27/never-stop-learning-3653430_640.jpg"
        alt="..."
        className="h-full w-full fixed opacity-65"
        style={{ zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}
      />
    );
  } else if (count === 2) {
    return (
      <img
        src="https://psdchallenge.psd.gov.sg/images/default-source/challenge-library/ideas/work-better/learn-something-new-in-5-minutes/learning-720x400.jpg"
        alt="..."
        className="h-full w-full fixed opacity-65"
        style={{ zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}
      />
    );
  } else if (count === 3) {
    return (
      <img
        src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg"
        alt="..."
        className="h-full w-full fixed opacity-65"
        style={{ zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}
      />
    );
  }
};

export default Background;
