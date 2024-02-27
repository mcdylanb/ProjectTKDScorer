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

  const [blueRoundWins, setBlueRoundWins] = useState(0);
  const [redRoundWins, setRedRoundWins] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);

  const [gameTimerStart, setGameTimerStart] = useState(false);
  const [breakTimerStart, setBreakTimerStart] = useState(false);

  //TODO Need to update into array
  const [ref1BlueScore, setRef1BlueScore] = useState(0);
  const [ref2BlueScore, setRef2BlueScore] = useState(0);
  const [ref3BlueScore, setRef3BlueScore] = useState(0);
  const [ref1RedScore, setRef1RedScore] = useState(0);
  const [ref2RedScore, setRef2RedScore] = useState(0);
  const [ref3RedScore, setRef3RedScore] = useState(0);
  const [refereesBlueScoreSheet, setRefereesBlueScoreSheet] = useState([]);
  const [refereesRedScoreSheet, setRefereesRedScoreSheet] = useState([]);
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
    onExpire: () => {
      if (gameTimerStart === true) {
        setGameTimerStart(false);
        startBreakMode();
      } else if (breakTimerStart === true) {
        setBreakTimerStart(false);
        startGameMode();
      }
    },
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

  //game loop
  function startGameMode() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 90);
    restart(time, false);
    setGameMode('GAME');
    console.log(gameMode);
    setGameTimerStart(true);
  }

  function startBreakMode() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 30);
    restart(time, false);
    setGameMode('BREAK');
    console.log(gameMode);
    setBreakTimerStart(true);
  }

  function checkGameWinner() {
    let winner = '';
    if (currentRound < 2) {
      if (blueRoundWins > 2) {
        winner = 'blue';
      } else if (redRoundWins > 2) {
        winner = 'red';
      } else {
        winner = 'none';
      }
    } else {
      winner = 'none';
    }
    return winner;
  }

  function identifyWinner() {
    let roundWinner = '';
    if (blueScore > redScore) {
      roundWinner = 'blue';
    } else if (redScore > blueScore) {
      roundWinner = 'red';
    } else {
      roundWinner = 'tie';
    }
    console.log(roundWinner);
    return roundWinner;
  }

  function ref1BlueScoreChange(event) {
    // setRef1BlueScore(event.target.value);
    setRefereesBlueScoreSheet[0](event.target.value);
    console.log(refereesBlueScoreSheet[0]);
  }

  function ref1RedScoreChange(event) {
    setRef1RedScore(event.target.value);
    console.log(ref1RedScore);
  }

  function ref2BlueScoreChange(event) {
    setRef2BlueScore(event.target.value);
    console.log(ref2BlueScore);
  }

  function ref2RedScoreChange(event) {
    setRef2RedScore(event.target.value);
    console.log(ref2RedScore);
  }
  function ref3BlueScoreChange(event) {
    setRef1BlueScore(event.target.value);
    console.log(ref3BlueScore);
  }

  function ref3RedScoreChange(event) {
    setRef1RedScore(event.target.value);
    console.log(ref3RedScore);
  }
  function changeRoundScores() {
    setBlueScore(refereesBlueScoreSheet[0]);
    setRedScore(ref1RedScore);
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
          // TODO: move into component
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
          // TODO: please move this to own function
          onClick={() => {
            if (gameMode === 'GAME') {
              startGameMode();
            } else {
              startBreakMode();
            }
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
        <button onClick={startGameMode} type="button">
          Game
        </button>
        <button onClick={startBreakMode} type="button">
          Break
        </button>
        <button onClick={identifyWinner} type="button">
          Choose Winner
        </button>
        <div>
          <div>
            BLUE REFEREE
            <br />
            <input
              type="number"
              value={refereesBlueScoreSheet[1]}
              onChange={setRefereesBlueScoreSheet}
            />
            <input
              type="number"
              value={ref2BlueScore}
              onChange={ref2BlueScoreChange}
            />
            <input
              type="number"
              value={ref3BlueScore}
              onChange={ref3BlueScoreChange}
            />
          </div>
          <div>
            RED REFEREE
            <br />
            <input
              type="number"
              value={ref1RedScore}
              onChange={ref1RedScoreChange}
            />
            <input
              type="number"
              value={ref2RedScore}
              onChange={ref2RedScoreChange}
            />
            <input
              type="number"
              value={ref3RedScore}
              onChange={ref3RedScoreChange}
            />
          </div>
          <button onClick={changeRoundScores} type="button">
            change scores
          </button>
        </div>
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
