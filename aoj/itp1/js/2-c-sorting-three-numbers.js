const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (args) => {
  let tmp;
  let [a, b, c] = args.split(" ").map(Number);
  tmp = a;
  if (a > b) {
    a = b;
    b = tmp;
  }
  if (a > c) {
    tmp = a;
    a = c;
    c = tmp;
  }
  if (b > c) {
    tmp = b;
    b = c;
    c = tmp;
  }
  console.log(`${a} ${b} ${c}`);

  rl.close();
})


