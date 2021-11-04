const handleUserInput = function (value) {
   
  if (value === '\u0003') {
    console.log("Terminated")
    process.exit();
  }
  
}
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}; 

module.exports = setupInput;
