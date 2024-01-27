
// function Main(args) {
//   const argList = args.split("\n");
//   console.log(argList);

//   const N = parseInt(argList[0]);
//   let processCount = 0;

//   let numList = argList[1].split(" ").map(Number);
//   console.log(numList);

//   while (numList.length === N) {
//     numList = numList.map((num) => {
//       if (num % 2 == 0) return num / 2;
//     });
//     if (numList.length === N) processCount++;
//   }
//   console.log(processCount);

// }

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));


const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (args) => {
  const argList = args.split("\n");

  const N = parseInt(argList[0]);
  let processCount = 0;

  let numList = argList[1].split(" ").map(Number);

  while (numList.length === N && numList.every(num => num % 2 === 0)) {
    numList = numList.map(num => Math.floor(num / 2));
    processCount++;
  }
  console.log(processCount);
  rl.close();
});


