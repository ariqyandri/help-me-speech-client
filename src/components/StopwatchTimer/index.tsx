import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  switchActive,
  deactivate,
  setTime,
  lap,
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
  function handleLap() {
    dispatch(lap());
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
  }, [dispatch, isActive, seconds]);
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
        {seconds > 0 ? (
          <button className="button" onClick={handleLap}>
            lap
          </button>
        ) : null}
        <button className="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
