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
  selectLaps,
} from "../../store/stopwatch/selectors";
import LapTable from "../../components/LapTable/index";
import { Button } from "react-bootstrap";
import "./StopwatchTimer.css";
import { displayWatch } from "../../config/constants";

export default function StopwatchTimer() {
  const dispatch = useDispatch();
  const timeDisplay = useSelector(selectTime);
  const { hrs, min, sec } = timeDisplay;
  const seconds = useSelector(selectSeconds);
  const isActive = useSelector(selectIsActive);
  const laps = useSelector(selectLaps);
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
    dispatch(deactivate());
  }, [dispatch]);
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
    <div className="stopwatch">
      <h1 className="stopwatchDisplay">{displayWatch(hrs, min, sec)}</h1>
      <div className="stopwatchButtons">
        <Button variant={isActive ? "danger" : "success"} onClick={handleClick}>
          {isActive ? "Pause" : "Start"}
        </Button>
        {seconds > 0 ? (
          <Button variant="outline-secondary" onClick={handleLap}>
            Lap
          </Button>
        ) : null}
        <Button variant="warning" onClick={handleReset}>
          Reset
        </Button>
      </div>
      {laps ? <LapTable laps={laps} /> : null}{" "}
    </div>
  );
}
