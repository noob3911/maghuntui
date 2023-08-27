const os = require('os');
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, () => {
    const networkInterfaces = os.networkInterfaces();
    const ipv4Address = networkInterfaces['Ethernet']?.find((interface) => interface.family === 'IPv4')?.address;

    if (ipv4Address) {
      console.log(`Server is running at http://${ipv4Address}:3000`);
    } else {
      console.log('Server is running at http://localhost:3000');
    }
  });
});
