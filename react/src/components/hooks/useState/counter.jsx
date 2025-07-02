import { useState } from "react";

export const CounterChallenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleIncrement = () => {
    setCount(count + step);
  };
  const handleDecrement = () => {
    setCount(count - step);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Use State Challenge</h1>
      <p>
        Count : <span> {count} </span>
      </p>
      <div>
        <label>
          step :{" "}
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <button onClick={handleIncrement} disabled={count >= 100}>
          increment
        </button>
        <button onClick={handleDecrement} disabled={count <= 0}>
          decrement
        </button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
};
