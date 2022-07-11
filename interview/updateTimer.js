// https://www.youtube.com/watch?v=Rs7ARD5TCFU&t=1s

function updateTimer(isoDate) {
  const date = new Date(isoDate);

  // got different in millisecond between given date and current date
  const timeTillDate = date - new Date();

  if (timeTillDate <= 0) return "time's up!";

  const seconds = Math.floor(timeTillDate / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  return `${hours}:${minutes % 60}:${seconds % 60}`;
}

console.log(updateTimer("2022-07-12T15:00:10+08:00"));
