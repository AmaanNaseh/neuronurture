import "./App.css";
import { Routes, Route } from "react-router-dom";

import Main from "./Pages/Main";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Sensory from "./Pages/Sensory";
import Focus from "./Pages/Focus";
import Dyslexia from "./Pages/Dyslexia";
import AiExercises from "./Pages/AiExercises";
import SciencePage from "./Pages/SciencePage";
import MathsPage from "./Pages/MathsPage";
import EnglishPage from "./Pages/EnglishPage";
import Pronounciation from "./Pages/Pronounciation";
import ScienceQuiz from "./Components/Quiz/ScienceQuiz";
import MathsQuiz from "./Components/Quiz/MathsQuiz";
import EnglishQuiz from "./Components/Quiz/EnglishQuiz";
import VoiceExercise from "./Pages/VoiceExercise";
import VisualExercise from "./Pages/VisualExercise";
import Progress from "./Pages/Progress";
import EngScore from "./Pages/EngScore";
import MathsScore from "./Pages/MathsScore";
import ScienceScore from "./Pages/ScienceScore";
import ProgressML from "./Pages/ProgressML";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sensory-overload" element={<Sensory />} />
      <Route path="/focus" element={<Focus />} />
      <Route path="/dyslexia" element={<Dyslexia />} />
      <Route path="/aiexercises" element={<AiExercises />} />
      <Route path="/science" element={<SciencePage />} />
      <Route path="/maths" element={<MathsPage />} />
      <Route path="/english" element={<EnglishPage />} />
      <Route path="/science/quiz" element={<ScienceQuiz />} />
      <Route path="/maths/quiz" element={<MathsQuiz />} />
      <Route path="/english/quiz" element={<EnglishQuiz />} />
      <Route path="/science/score" element={<ScienceScore />} />
      <Route path="/maths/score" element={<MathsScore />} />
      <Route path="/english/score" element={<EngScore />} />
      <Route path="/pronounciation" element={<Pronounciation />} />
      <Route path="/exercise/voice" element={<VoiceExercise />} />
      <Route path="/exercise/concentration" element={<VisualExercise />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/progress/ml" element={<ProgressML />} />
    </Routes>
  );
}

export default App;
