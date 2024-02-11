import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '100px' }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start} type="button">
        Start
      </button>
      <button onClick={pause} type="button">
        Pause
      </button>
      <button onClick={resume} type="button">
        Resume
      </button>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time, false);
        }}
        type="button"
      >
        Restart
      </button>
      <button
        onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + 90);
          restart(time, false);
        }}
        type="button"
      >
        Game
      </button>
      <button
        onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + 60);
          restart(time, false);
        }}
        type="button"
      >
        Break
      </button>
    </div>
  );
}

function Hello() {
  const [blueScore, setBlueScore] = useState(20); // Initialize blueScore state
  const [redScore, setRedScore] = useState(20); // Initialize blueScore state
  const [round1Winner, setRound1Winner] = useState('white');

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  //increment and decrement score of each player
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

  // set winner of round
  function changeRoundWinner(roundWinner: string, setRoundWinner: Function) {
    if (roundWinner === 'white') {
      setRoundWinner('blue');
      console.log('winner blue');
    } else if (roundWinner === 'blue') {
      setRoundWinner('red');
      console.log('winner red');
    } else {
      setRoundWinner('white');
      console.log('winner none');
    }
  }
  return (
    <div className="grid">
      <div className="timer">
        <div className="roundTracker">
          <div
            className="round1"
            onClick={()=>changeRoundWinner(round1Winner, setRound1Winner)}
            style={{ backgroundColor: `${round1Winner}` }}
          >
            R1
          </div>
          <div className="round2">R2</div>
          <div className="round3">R3</div>
        </div>
        <MyTimer expiryTimestamp={time} />
      </div>
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
