


const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (args) => {
  // 長方形右上頂点座標(W, H)、円の中心座標(x, y)、半径r
  const [W, H, x, y, r] = args.split(" ").map(Number);

  if (x + r > W) {
    console.log("No");
  } else if (x - r < 0) {
    console.log("No");
  } else if (y + r > H) {
    console.log("No");
  } else if (y - r < 0) {
    console.log("No");
  } else {
    console.log("Yes");
  }
  rl.close();
});






