import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function Hello() {
  const [blueScore, setBlueScore] = useState(20); // Initialize blueScore state
  const [redScore, setRedScore] = useState(20); // Initialize blueScore state
  function increaseBlueScore() {
    setBlueScore(blueScore + 1);
  }
  function decreaseBlueScore() {
    setBlueScore(blueScore - 1);
  }
  function increaseRedScore() {
    setRedScore(redScore + 1);
  }
  function decreaseRedScore() {
    setRedScore(redScore - 1);
  }
  return (
    <div className="grid">
      <div>Timer</div>
      <div className="score">
        <div className="blue-score">
          <div className="control">
            <button type="button" onClick={increaseBlueScore}>
              +
            </button>
            <button type="button" onClick={decreaseBlueScore}>
              -
            </button>
          </div>
          <h1>{blueScore}</h1>
        </div>
        <div className="red-score">
          <h1>{redScore}</h1>
          <div className="control">
            <button type="button" onClick={increaseRedScore}>
              +
            </button>
            <button type="button" onClick={decreaseRedScore}>
              -
            </button>
          </div>
        </div>
      </div>
      <div>footer</div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
