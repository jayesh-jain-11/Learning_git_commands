const http = require("http");
const PORT = 3000;

const counter = (() => {
  let count = 0;
  return () => ++count;
})();

const server = http.createServer((req, res) => {
  res.end(`Server is up and running!, ${counter()} requests served.`);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
