const fs = require('fs');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf-8'));
const secretKey = secrets.secretKey;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Your secret key is: ${secretKey}`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://<span class="math-inline">\{hostname\}\:</span>{port}/`);
});