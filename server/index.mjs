import http, { Server } from "http";

const host = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    // listen when new data is coming
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("close", () => {
      console.log(body);
    });

    res.writeHead(201);
    res.end("ok");
  } else {
    res.writeHead(200);
    res.end("hi");
  }
});

server.listen(port, host, () => {
  console.log("Server ON");
});