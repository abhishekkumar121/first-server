const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Abhishek Kumar");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Abhishek Kumar\n");
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
