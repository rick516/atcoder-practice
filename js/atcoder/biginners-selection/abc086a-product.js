// function Main(args) {
//   const [a, b] = args.split(" ").map((arg) => parseInt(arg, 10));
//   if (a * b % 2 == 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// }

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));


const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (args) => {
  const [a, b] = args.split(" ").map((arg) => parseInt(arg, 10));
  if (a * b % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
  rl.close();
});


