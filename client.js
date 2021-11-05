const net = require("net");
const {IP, HOST} = require("./constants")
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: HOST
  });
  conn.setEncoding("utf8");
  conn.on('connect', data => {
//     // code that does something when the connection is first established
    console.log("Successfully connected to game server")
  });
 conn.write("Name: AAG")
 conn.write("Move: UP")
 conn.write(":)")
//   // interpret incoming data as text
  

  return conn;
};

module.exports = connect;

