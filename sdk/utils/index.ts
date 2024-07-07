export const formatLocalTime = (timestamp: string) => {
  const time = new Date(timestamp);
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes} Local time`;

  return formattedTime;
};

export const BASE_URL = "https://afrolay-b25547067a1c.herokuapp.com/api/v1";
