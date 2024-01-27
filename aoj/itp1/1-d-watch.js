const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("", (args) => {
  const S = Number(args);
  const h = Math.floor(S / 3600);
  const m = Math.floor((S - h * 3600) / 60);
  const s = S - (h * 3600) - (m * 60);
  console.log(`${h}:${m}:${s}`);
  rl.close();
})
