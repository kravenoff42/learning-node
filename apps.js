const http = require('http');
let dt = require('./my-module');
const server = http.createServer((request, response) => {
    
const { headers, method, url } = request;
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });
  if (request.method === 'GET' && request.url === '/echo') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("The date and time are currently: " + dt.myDateTime());
    response.end();
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(process.env.PORT, process.env.IP);


