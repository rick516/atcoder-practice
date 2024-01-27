const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (args) => {
  const [a, b, c] = args.split(" ").map(Number);
  console.log(a, b, c);

  if (a < b && b < c) {
    console.log("Yes");
  } else {
    console.log("No");
  }
  rl.close();
})


