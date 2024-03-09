import { useState } from 'react';

export default function RoundTracker() {
  const [round1Winner, setRound1Winner] = useState('white');
  const [round2Winner, setRound2Winner] = useState('white');
  const [round3Winner, setRound3Winner] = useState('white');
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
  );
}
