let http = require("http");
let url = require('url');
let fs = require('fs');
let qs = require("querystring");

let server = http.createServer(handel);

function handel(req,res){
  var store = '';
  console.log(req.url);
  req.on('data', (data) => {
    store += data;
  });

  req.on('end', () => {
    if(req.method === 'GET' && req.url ==="/form"){
      fs.createReadStream("./form.html").pipe(res);
    }
    if(req.method === 'POST' && req.url === "/form"){
      fs.createReadStream("./form.html").pipe(res);
      res.end();
    }
  })
}

server.listen(3000, () => {
  console.log('server is on 1000 port');
});

