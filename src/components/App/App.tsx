import React from "react";
import "./App.scss";

const App: React.FC = () => (
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
              y1="245"
              x2="250"
              y2="20"
              style={{ stroke: "red", strokeWidth: "2" }}
            />
            <line className="minute-hand" x1="254" y1="250" x2="500" y2="255" />
            <line className="hour-hand" x1="254" y1="250" x2="200" y2="400" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default App;
