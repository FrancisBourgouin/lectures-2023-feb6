const net = require("net");

const server = net.createServer((connection) => {
  connection.setEncoding("utf-8");

  connection.on("data", (data) => {
    console.log(data);
  });
});

// Net package : HTTP is not implemented
// HTTP : Hyper Text Transfer Protocol
// HTTPS :
