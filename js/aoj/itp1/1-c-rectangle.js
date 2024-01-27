const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("", (args) => {
  const list = args.split(" ").map((arg) => Number(arg));
  const a = list[0];
  const b = list[1];
  console.log(`${a * b} ${2 * (a + b)}`);
  rl.close();
})
