// HTTP Server w/ Routing
const http = require("http");

// METHODS ?!?!
// GET => GET THE CONTENT (DEFAULT)
// POST => POST / SEND CONTENT TO THE SERVER (ACTION)
// PUT => UPDATE CONTENT ON THE SERVER
// DELETE => DELETE CONTENT ON THE SERVER

// CRUD => Create Read Update Delete

const dataPerRoute = {
  "/secret": `
  <html>
    <body>
      <h1 style="color:#BADA55">I'M ALWAYS NERVOUS ON MY FIRST LECTURE WITH A NEW COHORT</h1>
    </body>
  </html>
  `,
  "/home": `
  <html>
    <body>
      <h1 style="color:#B0B">WELCOME HOME</h1>
    </body>
  </html>
  `,
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  // req.url => Path asked by the browser
  // req.method => Method asked by the browser

  const data = dataPerRoute[req.url];

  if (data) {
    return res.end(data);
  }
  return res.end(`
    <html>
      <body>
        <h1 style="color:#BADA55">WHY U LOST ?</h1>
      </body>
    </html>
    `);
});

server.listen(8080);
