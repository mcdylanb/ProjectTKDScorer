import '../App.css';

export default function ScoreControlBlue({
  score,
  gjcounter,
  onCountChangeScore,
  onCountChangeGJ,
  side,
}) {
  return (
    <div className="control">
      <button type="button" onClick={() => onCountChangeScore(score + 1)}>
        {side} SCORE +
      </button>
      <button type="button" onClick={() => onCountChangeScore(score - 1)}>
        {side} SCORE -
      </button>
      {/* Blue GJ Counter  */}
      <button type="button" onClick={() => onCountChangeGJ(gjcounter + 1)}>
        {side} GJ +
      </button>
      <button type="button" onClick={() => onCountChangeGJ(gjcounter - 1)}>
        {side} GJ -
      </button>
    </div>
  );
}
