import React, { useState, useEffect } from "react";
import "../src/App.css";


const CountdownTimer = () => {
  const eventDate = new Date("2023-12-31T23:59:59"); // Set your event date here

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      const timeLeft = eventDate - currentTime;
      if (timeLeft <= 0) {
        clearInterval(timer);
      } else {
        const newDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const newHours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const newMinutes = Math.floor(
          (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
        );
        const newSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        setDays(newDays);
        setHours(newHours);
        setMinutes(newMinutes);
        setSeconds(newSeconds);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="text-center text-white py-6 rounded-lg">
      <div className="flex justify-center space-x-4 commonFontLight">
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="text-4xl font-semibold w-20">{days}</div>
          <div className="text-gray-400 text-2xl">DAYS</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="text-4xl font-semibold w-20">{hours}</div>
          <div className="text-gray-400 text-2xl">HOURS</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="text-4xl font-semibold w-20">{minutes}</div>
          <div className="text-gray-400 text-2xl">MIN</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="text-4xl font-semibold w-20">{seconds}</div>
          <div className="text-gray-400 text-2xl">SEC</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
