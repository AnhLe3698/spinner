let counter = 0;
let chars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
const interval = setInterval(() => {
  process.stdout.write(chars[counter % 4]);
  counter ++;
  if (counter === 9) {
    console.log("");
    clearInterval(interval);
  }
}, 200 + 400 * counter);