let http = require('http');
let fs = require('fs');

let server = http.createServer(handlefile);

function handlefile(req, res){
  res.setHeader('Content-Type', 'text/plain');
  fs.createReadStream('./readme.txt').pipe(res) 
}

server.listen(3000, () => {
  console.log('The server is on port 3000');
})