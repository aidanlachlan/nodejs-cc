import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.PORT || 8000;

// get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
  let filePath;
  try {
    // check if GET request
    if (req.method === "GET") {
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("file not found");
      }
    } else {
      throw new Error("method not allowed");
    }

    const data = await fs.readFile(filePath);
    res.setHeader("Content-Type", "text/html");
    res.write(data);
    res.end();
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("Server Error: " + error.message);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
