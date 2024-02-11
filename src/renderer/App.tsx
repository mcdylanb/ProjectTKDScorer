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
        <span>{minutes}</span>:<span>{seconds}</span>
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
  //round winner tracker
  const [round1Winner, setRound1Winner] = useState('white');
  const [round2Winner, setRound2Winner] = useState('white');
  const [round3Winner, setRound3Winner] = useState('white');

  const [blueGJCounter, setBlueGJCounter] = useState(0);
  const [redGJCounter, setRedGJCounter] = useState(0);

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

  //GJ counter
  function increaseBlueGJCounter() {
    setBlueGJCounter(blueGJCounter + 1);
  }
  function increaseRedGJCounter() {
    setRedGJCounter(redGJCounter + 1);
  }

  function decreaseBlueGJCounter() {
    setBlueGJCounter(blueGJCounter - 1);
  }

  function decreaseRedGJCounter() {
    setRedGJCounter(redGJCounter - 1);
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
      <div className="blue-flag">empty</div>
      <div className="blue-name">BNAME</div>
      <div className="red-name">RNAME</div>
      <div className="red-flag">empty</div>

      <div className="blue-score-control">BS CONTROL</div>
      <div className="red-score-control">RS CONTROL</div>

      <div className="blue-score">BS SCORE</div>
      <div className="game-mode">GAME MODE</div>
      <div className="timer">TIMER</div>
      <div className="timer-control">TIMER CONTROLLER</div>
      <div className="red-score">RS SCORE</div>

      <div className="blue-gj">BGJ</div>
      <div className="game-mode-control">GAME CONTROL</div>
      <div className="red-gj">RGJ</div>
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
