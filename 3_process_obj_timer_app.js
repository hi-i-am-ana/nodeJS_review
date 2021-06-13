const waitTime = 5000;
const intervalTime = 500;
let currentTime = 0;

const incrementTime = () => {
  currentTime += intervalTime;
  percent = Math.floor(currentTime / waitTime * 100);
  // Clear previous line
  process.stdout.clearLine();
  // Put cursor in the beginning of the line
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting... ${percent}%`)
}

const timerFinished = () => {
  clearInterval(interval)
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log('done');
}

console.log(`setting ${waitTime/1000} sec delay`);

setTimeout(timerFinished, waitTime);

// setInterval returns an interval ID which uniquely identifies the interval, so it can be removed later by calling clearInterval()
interval = setInterval(incrementTime, intervalTime);