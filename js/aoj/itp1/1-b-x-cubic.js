const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (arg) => {
  const x = parseInt(Math.pow(arg, 3));
  console.log(x);
  rl.close();
});
