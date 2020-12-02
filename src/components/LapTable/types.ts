export type Lap = {
  num: number;
  time: Time;
};

export type Time = {
  sec: number;
  min: number;
  hrs: number;
};

export type Props = { laps: Lap[] };
