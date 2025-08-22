import http from "http";
const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  try {
    // check if GET request
    if (req.method === "GET") {
      // handle GET request
      if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Homepage</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>About Page</h1>");
      } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404 Not Found</h1>");
      }
    } else {
      throw new Error("method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("Server Error: " + error.message);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
