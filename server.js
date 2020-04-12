var http = require('http');

var server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end('Salut tout le monde !');
});

server.listen(process.env.PORT, '0.0.0.0');
