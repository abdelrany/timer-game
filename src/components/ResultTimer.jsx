import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultTimer = forwardRef(function ResultTimer(
  { onClick, targetTime, remainingTime },
  ref
) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => ({
    show() {
      dialog.current.showModal();
    },
  }));
  return createPortal(
    <dialog className="result-modal" ref={dialog}>
      {userLost ? <h2>You lost</h2> : <h2>You Win :{score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds
      </p>
      <p>
        You stopped timer with <strong>{formattedTime}</strong> seconds
      </p>
      <form method="dialog" onSubmit={onClick}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default ResultTimer;
