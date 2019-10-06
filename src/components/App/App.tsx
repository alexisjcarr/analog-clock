import React, { useEffect, useState } from "react";
import "./App.scss";

const App: React.FC = () => {
  //const [time] = useState(Date.now());

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    const time1 = setInterval(() => {
      setMinutes(prevMinutes => prevMinutes + 1);
    }, 60000);

    const time2 = setInterval(() => {
      setHours(prevHours => prevHours + 1);
    }, 3600000);

    const cleanUp = () => {
      clearInterval(time);
      clearInterval(time1);
      clearInterval(time2);
    };

    return cleanUp;
  }, [seconds, minutes, hours]);

  // useEffect(() => {
  //   const time = setInterval(() => {
  //     setMinutes(prevMinutes => prevMinutes + 1);
  //   }, 60000);

  //   return () => clearInterval(time);
  // }, [minutes]);

  // useEffect(() => {
  //   const time = setInterval(() => {
  //     setHours(prevHours => prevHours + 1);
  //   }, 3600000);

  //   return () => clearInterval(time);
  // }, [hours]);

  return (
    <div className="App">
      <div className="clock-face">
        <div className="numbers">
          <h1 className="center">•</h1>
          <h1 className="twelve">12</h1>
          <h1 className="three">3</h1>
          <h1 className="six">6</h1>
          <h1 className="nine">9</h1>
          <div className="hands">
            <svg height="510" width="510">
              <line
                x1="254"
                y1="250"
                x2="250"
                y2="20"
                style={{
                  stroke: "red",
                  strokeWidth: 1,
                  transform: `rotate(${seconds * 6}deg)`,
                  transformOrigin: "center",
                  position: "relative"
                }}
              />
              <line
                className="minute-hand"
                x1="254"
                y1="250"
                x2="250"
                y2="35"
                style={{
                  stroke: "black",
                  strokeWidth: 4,
                  transform: `rotate(${minutes * 6}deg)`,
                  transformOrigin: "center",
                  position: "relative"
                }}
              />
              <line
                className="hour-hand"
                x1="254"
                y1="250"
                x2="250"
                y2="70"
                style={{
                  stroke: "black",
                  strokeWidth: 6,
                  transform: `rotate(${hours * 6}deg)`,
                  transformOrigin: "center",
                  position: "relative"
                }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
