// const net = require("net");
const connect = require(`./client`);
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
setupInput()

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "165.227.47.243",
//     port: 50541
//   });
//   conn.on('data', data => {
// //     // code that does something when the connection is first established
//     console.log(data)
//   });
// //   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };


console.log("Connecting ...");
connect();