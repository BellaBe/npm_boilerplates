const http = require('http');
const url = 'http://localhost:8000';

http.get(url, (res) => {
  res.on('data', (d) => {
    console.log(d.toString());
  });
});