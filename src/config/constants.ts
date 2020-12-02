export const apiUrl = process.env.API_URL || "http://localhost:4000";
export const DEFAULT_MESSAGE_TIMEOUT = 3000;
export const displayTime = (ms: number) => {
  const sec = Math.floor((ms / 1000) % 60);
  const min = Math.floor((ms / (1000 * 60)) % 60);
  const hrs = Math.floor((ms / (1000 * 60 * 60)) % 24);
  return `${hrs}:${min}:${sec}`;
};
