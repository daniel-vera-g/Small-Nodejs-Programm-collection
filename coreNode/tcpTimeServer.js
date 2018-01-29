const net = require('net');
// port to listen to
const port = process.argv[2];

// function to return the current date
let currentDate = ()=>{
  let myDateString;
  let date = new Date();

//   create string with current date
  myDateString =
  date.getFullYear() + "-"
  + ('0' + (date.getMonth() + 1)).slice(-2) + "-"
  + ('0' + date.getDate()).slice(-2) + " "
  + ('0' + date.getHours()).slice(-2) + ":"
  + ('0' + date.getMinutes()).slice(-2);

  return myDateString
}

// create server instance
let server = net.createServer((socket)=>{
    socket.end(currentDate() + '\n');
})

// listen to the server
server.listen(port);
