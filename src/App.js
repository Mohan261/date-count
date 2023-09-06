import "./App.css";
import { useState } from "react";
function App() {
  // let date = obj.toDateString();

  const [stepValue, setStep] = useState(1);
  const [countValue, setCount] = useState(0);

  // const [dateValue, dateChange] = useState(date);

  const stepPrev = () => {
    if (stepValue > 1) return setStep((st) => st - 1);
  };
  const stepNext = () => {
    setStep((st) => st + 1);
  };
  const countPrev = () => {
    setCount((ct) => ct - stepValue);
  };
  const countNext = () => {
    setCount((ct) => ct + stepValue);
  };

  let obj = new Date();
  obj.setDate(obj.getDate() + countValue);
  let date = obj.toDateString();

  return (
    <div className="container">
      <p>Date Counter</p>
      <div>
        <button onClick={() => stepPrev()}>-</button>steps:{stepValue}
        <button onClick={() => stepNext()}>+</button>
      </div>
      <div>
        <button onClick={() => countPrev()}>-</button>count:{countValue}
        <button onClick={() => countNext()}>+</button>
        <p>
          {countValue < 0 ? (
            <p>
              {-1 * countValue} day ago from today {date}
            </p>
          ) : (
            <p>
              {countValue} day from today {date}
            </p>
          )}
        </p>
      </div>
    </div>
  );
}

export default App;
