
function Main(args) {
  const marbles = args.split("").map((arg) => parseInt(arg, 10));
  const count = marbles.filter((marble) => marble === 1).length;
  console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));



