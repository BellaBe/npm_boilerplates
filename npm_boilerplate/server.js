const http = require('http');
const url = require('url');
const makeServer = (req, res) => {
  let path = url.parse(req.url).pathname;
  console.log(path);
  if (path === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write('Hello world');
  } else if (path === '/about') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write('About page');
  } else if (path === '/blog') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write('Blog page');
  }else{
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('Error page')
  }
  res.end();
};

const server = http.createServer(makeServer);

server.listen(3000, () => {
  console.log('Node server started at 3000');
});