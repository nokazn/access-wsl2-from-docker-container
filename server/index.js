'use strict';

const http = require('http');

const PORT = 3000;

const server = http.createServer((_, res) => {
  res.writeHead(200);
  res.end('Hello World!');
});
server.listen(PORT, () => {
  console.log(`The http server is listening ar port: ${PORT} 🚀`);
});
