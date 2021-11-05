
   let connection;
  
  
  

const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}; 
const handleUserInput = function(value) {
  if (value === '\u0003') {
    console.log("Terminated")
    process.exit()
  } else if (value === "w"){
  console.log ("Move: up")
  conn.write("Move: up")
} else if (value === "a"){
  console.log ("Move: Left")
  conn.write("Move: left")
} else if (value === "s"){
  console.log ("Move: Down")
  conn.write("Move: down")
} else if (value === "d"){
  console.log ("Move: Right")
  conn.write("Move: right")
}

}


module.exports = setupInput;
