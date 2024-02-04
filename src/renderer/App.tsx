import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  return (
    <div className="grid">
      <div>Timer</div>
      <div className="score">
        <div className="blue-score">
          <div className="control">
            <button type="button">+</button>
            <button type="button">-</button>
          </div>
          <h1>20</h1>
        </div>
        <div className="red-score">
          <h1>10</h1>
          <div className="control">
            <button type="button">+</button>
            <button type="button">-</button>
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
