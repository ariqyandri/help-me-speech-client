import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  switchActive,
  deactivate,
  setTime,
} from "../../store/stopwatch/action";
import {
  selectTime,
  selectIsActive,
  selectSeconds,
} from "../../store/stopwatch/selectors";

export default function StopwatchTimer() {
  const dispatch = useDispatch();
  const timeDisplay = useSelector(selectTime);
  const { hrs, min, sec } = timeDisplay;
  const seconds = useSelector(selectSeconds);
  const isActive = useSelector(selectIsActive);
  function handleClick() {
    dispatch(switchActive());
  }
  function handleReset() {
    dispatch(deactivate());
  }
  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        dispatch(setTime());
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  return (
    <div className="app">
      <div className="time">{`${hrs} : ${min} : ${sec}`}</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={handleClick}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
