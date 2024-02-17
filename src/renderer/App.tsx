import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { useTimer } from 'react-timer-hook';

function Hello(expiryTimestamp) {
  const [blueScore, setBlueScore] = useState(20); // Initialize blueScore state
  const [redScore, setRedScore] = useState(20); // Initialize blueScore state
  const [gameMode, setGameMode] = useState('BREAK'); // Initialize blueScore state
  //round winner tracker
  const [round1Winner, setRound1Winner] = useState('white');
  const [round2Winner, setRound2Winner] = useState('white');
  const [round3Winner, setRound3Winner] = useState('white');

  const [blueGJCounter, setBlueGJCounter] = useState(0);
  const [redGJCounter, setRedGJCounter] = useState(0);

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
      {/* FLAGS + NAMES */}
      <div className="blue-flag">empty</div>
      <div className="blue-name">
        <h1>BALAGTAS</h1>
      </div>
      <div className="red-name">
        <h1>LAYAGUE</h1>
      </div>
      <div className="red-flag">empty</div>

      {/* SCORE CONTROLS + COUNTERS */}
      <div className="blue-score-control-container">
        <div className="control">
          <button type="button" onClick={increaseBlueScore}>
            BLUE SCORE +
          </button>
          <button type="button" onClick={decreaseBlueScore}>
            BLUE SCORE -
          </button>
          {/* Blue GJ Counter  */}
          <button type="button" onClick={increaseBlueGJCounter}>
            BLUE GJ +
          </button>
          <button type="button" onClick={decreaseBlueGJCounter}>
            BLUE GJ -
          </button>
        </div>
      </div>
      <div className="red-score-control-container">
        <div className="control">
          <button type="button" onClick={increaseRedScore}>
            RED SCORE +
          </button>
          <button type="button" onClick={decreaseRedScore}>
            RED SCORE -
          </button>
          {/* Red GJ Counter  */}
          <button type="button" onClick={increaseRedGJCounter}>
            RED GJ +
          </button>
          <button type="button" onClick={decreaseRedGJCounter}>
            RED GJ -
          </button>
        </div>
      </div>
      <div className="blue-score-container">
        <h1>{blueScore} </h1>
      </div>
      <div className="red-score-container">
        <h1>{redScore} </h1>
      </div>

      <div className="game-mode">
        <h1>{gameMode}</h1>
      </div>
      {/* TIMER */}
      <div className="timer">
        {' '}
        <div className="roundTracker">
          <div
            className="round1"
            onClick={() => changeRoundWinner(round1Winner, setRound1Winner)}
            style={{ backgroundColor: `${round1Winner}` }}
          >
            R1
          </div>
          <div
            className="round2"
            onClick={() => changeRoundWinner(round2Winner, setRound2Winner)}
            style={{ backgroundColor: `${round2Winner}` }}
          >
            R2
          </div>
          <div
            className="round3"
            onClick={() => changeRoundWinner(round3Winner, setRound3Winner)}
            style={{ backgroundColor: `${round3Winner}` }}
          >
            R3
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '100px' }}>
            <span>{minutes}</span>:<span>{seconds}</span>
          </div>
          <p>{isRunning ? 'Running' : 'Not running'}</p>
        </div>
      </div>
      <div className="timer-control">
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
            const time = new Date();
            if (gameMode === 'GAME') {
              time.setSeconds(time.getSeconds() + 90);
            } else if (gameMode === 'BREAK') {
              time.setSeconds(time.getSeconds() + 60);
            }
            restart(time, false);
          }}
          type="button"
        >
          Restart
        </button>
      </div>
      <div className="blue-gj">
        <h3>GAM-JEOM</h3>
        <h1>{blueGJCounter}</h1>
      </div>
      <div className="red-gj">
        <h3>GAM-JEOM</h3>
        <h1>{redGJCounter}</h1>
      </div>

      {/* GAME MODE */}
      <div className="game-mode-control">
        <button
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 90);
            restart(time, false);
            setGameMode('GAME');
            console.log(gameMode);
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
            setGameMode('BREAK');
            console.log(gameMode);
          }}
          type="button"
        >
          Break
        </button>
      </div>
      <div className="blue-footer">footer</div>
      <div className="red-footer">footer</div>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <Hello expiryTimestamp={time} />
    </div>
  );
}
