export const apiUrl =
  process.env.API_URL || "https://help-me-speech.herokuapp.com";
export const DEFAULT_MESSAGE_TIMEOUT = 3000;
export const displayTime = (s: number) => {
  const sec = Math.floor(s % 60);
  const min = Math.floor((s / 60) % 60);
  const hrs = Math.floor((s / (60 * 60)) % 24);
  return { sec, min, hrs };
};
