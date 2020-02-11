let sentence = "hello there from lighthouse labs";
let waitTime = 500;
const printString = () => {
  sentence += '\n'
  for (const char of sentence) {
    setTimeout( () => {
      process.stdout.write(char);
    }, waitTime)
    waitTime += 100
  }
}

  printString();
