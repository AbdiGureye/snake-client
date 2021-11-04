const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
  conn.setEncoding("utf8");
  conn.on('connect', data => {
//     // code that does something when the connection is first established
    console.log("Successfully connected to game server")
  });
 conn.write("Name: AAG")
//   // interpret incoming data as text
  

  return conn;
};

module.exports = connect;

