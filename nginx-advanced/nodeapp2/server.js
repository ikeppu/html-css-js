'use strict';

const http = require('http');

const host = '0.0.0.0';
const port = 3000;

const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  res.end(`{"message": "This is a JSON response 2"}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

// Kubernetes  ...

// I have to try kubernetes  ...

// FR
