export const apiUrl = process.env.API_URL || "http://localhost:4000";
export const DEFAULT_MESSAGE_TIMEOUT = 3000;
export const displayTime = (s: number) => {
  const sec = Math.floor(s % 60);
  const min = Math.floor((s / 60) % 60);
  const hrs = Math.floor((s / (60 * 60)) % 24);
  return { sec, min, hrs };
};
export const displayWatch = (hrs: number, min: number, sec: number) => {
  return `${hrs < 10 ? `0${hrs}` : hrs} : ${min < 10 ? `0${min}` : min} : ${
    sec < 10 ? `0${sec}` : sec
  }`;
};
