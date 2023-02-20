// Net package vs HTTP package

// Status messages from server:

// 200
// 404 => Not found
// 403 => Forbidden / Unauthorized

// 20x => Everything's good
// 30x => Redirections (301 temporary, 302 permanent)
// 40x => Client fudged up
// 50x => Server fudged up

// HTTP Server : Request / Response

// RESPONSE
// HEAD => Information about the response
// BODY => Actual content

// JSON => Interchange format

const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });

//   res.end(
//     JSON.stringify({
//       data: "Hello World!",
//     })
//   );
// });

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
  <html>
    <body>
      <h1 style="color:#BADA55">Hello WEST COAST YEAH</h1>
    </body>
  </html>
  `);
});

server.listen(8080);
