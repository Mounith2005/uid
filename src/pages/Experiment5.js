import React, { useState } from 'react';

function Experiment5() {
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);

  function toInt(input) {
    const n = parseInt(input, 10);
    return Number.isNaN(n) ? 0 : n;
  }

  function inc() { setValue((v) => v + toInt(step)); }
  function dec() { setValue((v) => v - toInt(step)); }
  function reset() { setValue(0); setStep(1); }

  return (
    <main className="container" style={{ padding: 24 }}>
      <h2>Experiment 5: Counter</h2>
      <div className="counter">
        <div className="counter__display">{value}</div>
        <div className="counter__controls">
          <button className="btn" onClick={dec}>-</button>
          <button className="btn btn--primary" onClick={inc}>+</button>
        </div>
        <div className="counter__step">
          <label className="form__label">Step</label>
          <input className="form__input" type="number" value={step} onChange={(e) => setStep(e.target.value)} />
        </div>
        <button className="btn" onClick={reset}>Reset</button>
      </div>
    </main>
  );
}

export default Experiment5;


