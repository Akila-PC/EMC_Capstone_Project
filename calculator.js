const http = require('http');
const fs = require('fs');
const path = require('path');
const client = require('prom-client');   // Prometheus client

const PORT = 5000;

// Collect default Node.js metrics (CPU, memory, event loop, etc.)
client.collectDefaultMetrics();

http.createServer(async (req, res) => {
  if (req.url === '/metrics') {
    // Serve Prometheus metrics
    res.setHeader('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
  } else {
    // Serve calculator.html
    const filePath = path.join(__dirname, 'calculator.html');
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
      }
    });
  }
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
