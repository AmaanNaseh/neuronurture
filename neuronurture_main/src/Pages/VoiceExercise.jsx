import CommonNav from "../Components/NavFooter/CommonNav";
import CommonFooter from "../Components/NavFooter/CommonFooter";
import React, { useState, useRef } from "react";

const VoiceExercise = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [frequency, setFrequency] = useState(0);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const microphoneRef = useRef(null);
  const javascriptNodeRef = useRef(null);

  const start = async () => {
    audioContextRef.current = new (window.AudioContext ||
      window.webkitAudioContext)();

    analyserRef.current = audioContextRef.current.createAnalyser();

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      microphoneRef.current =
        audioContextRef.current.createMediaStreamSource(stream);

      microphoneRef.current.connect(analyserRef.current);

      analyserRef.current.fftSize = 2048;
      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      javascriptNodeRef.current = audioContextRef.current.createScriptProcessor(
        2048,
        1,
        1
      );
      javascriptNodeRef.current.onaudioprocess = () => {
        analyserRef.current.getByteFrequencyData(dataArray);
        const frequency = getMaxFrequency(
          dataArray,
          audioContextRef.current.sampleRate
        );
        setFrequency(frequency.toFixed(2));
      };

      analyserRef.current.connect(javascriptNodeRef.current);
      javascriptNodeRef.current.connect(audioContextRef.current.destination);

      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
    }
  };

  const stop = () => {
    if (microphoneRef.current) microphoneRef.current.disconnect();
    if (analyserRef.current) analyserRef.current.disconnect();
    if (javascriptNodeRef.current) javascriptNodeRef.current.disconnect();
    if (audioContextRef.current) audioContextRef.current.close();

    setIsRecording(false);
    setFrequency(0);
  };

  const getMaxFrequency = (dataArray, sampleRate) => {
    const length = dataArray.length;
    let max = -1;
    let index = -1;

    for (let i = 0; i < length; i++) {
      if (dataArray[i] > max) {
        max = dataArray[i];
        index = i;
      }
    }

    return (index * sampleRate) / (2 * length);
  };

  return (
    <>
      <CommonNav />

      <div className="h-[75vh] flex flex-col justify-center items-center gap-16">
        <h1 className="text-red-900 font-bold text-4xl">
          Voice Pitch Exercise
        </h1>
        <div className="flex flex-row gap-12">
          <button
            className="text-blue-50 text-3xl font-semibold cursor-pointer
        bg-blue-800 hover:bg-blue-50 hover:text-blue-800 p-2 px-4 rounded-xl"
            onClick={start}
            disabled={isRecording}
          >
            Start
          </button>
          <button
            className="text-blue-50 text-3xl font-semibold cursor-pointer
        bg-blue-800 hover:bg-blue-50 hover:text-blue-800 p-2 px-4 rounded-xl"
            onClick={stop}
            disabled={!isRecording}
          >
            Stop
          </button>
        </div>

        <p className="text-black font-bold text-2xl">
          Frequency: <span>{frequency}</span> Hz
        </p>

        <p
          className={`text-2xl font-bold ${
            frequency < 250 ? "text-red-700" : "hidden"
          }`}
        >
          {frequency < 250
            ? "Low Voice, please speak louder"
            : "Good work! Maintain the pitch"}
        </p>
        <p
          className={`text-2xl font-bold ${
            frequency > 600 ? "text-red-700" : "hidden"
          }`}
        >
          {frequency > 600 ? "High Voice, please speak Lower" : ""}
        </p>
      </div>

      <CommonFooter />
    </>
  );
};

export default VoiceExercise;
