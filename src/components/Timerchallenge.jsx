import React, { useRef, useState } from "react";
import ResultTimer from "./ResultTimer";

function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const resultRef = useRef();
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    resultRef.current.show();
  }
  function handleRest() {
    setRemainingTime(targetTime * 1000);
  }
  function startTimer() {
    timer.current = setInterval(() => {
      setRemainingTime((remainingTime) => remainingTime - 10);
      //   resultRef.current.show();
    }, 10);
  }
  function stopTimer() {
    clearInterval(timer.current);
    resultRef.current.show();
  }

  return (
    <>
      <ResultTimer
        ref={resultRef}
        remainingTime={remainingTime}
        targetTime={targetTime}
        onClick={handleRest}
      />
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timeExpired ? <p className="challenge-time">Time Expired</p> : "   "} */}
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={!timerIsActive ? startTimer : stopTimer}>
            {timerIsActive ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Time Inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
