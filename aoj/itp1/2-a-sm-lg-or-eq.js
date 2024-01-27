const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (args) => {
  const [a, b] = args.split(" ").map((arg) => Number(arg));
  if (a > b) {
    console.log("a > b");
  } else if (a < b) {
    console.log("a < b");
  } else {
    console.log("a == b");
  }
  rl.close();
})