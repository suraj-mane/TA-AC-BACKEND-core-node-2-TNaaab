let http = require('http');
let fs = require('fs');

let server = http.createServer(handlefile);

function handlefile(req, res){
    fs.createReadStream('./readme.txt', (err, data) => {
      if(err) console.log(err);
      res.end(data);
    })
}

server.listen(3000, () => {
  console.log('The server is on port 3000');
})