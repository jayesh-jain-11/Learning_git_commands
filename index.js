const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello, World!, this is a simple HTTP server.");
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
