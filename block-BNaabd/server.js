let http = require('http');
var qs = require('querystring');

let server = http.createServer(handelrequest);

function handelrequest(req, res) {
  var dataformat = req.headers['content-type'];
  let store = '';

  req.on('data', (chank) => {
    store += chank;
  });

  req.on('end', () => {
    if(req.method === "POST" && req.url === "/json"){
      console.log(store);
      res.setHeader('content-type', 'text/json');
      res.end(store);
    }

    if(req.method === "POST" && req.url === "/form"){
      console.log(store);
      var datac = js.parse(store);
      res.end(JSON.stringify(store));
    }
  })
}

server.listen(4000, () => {
  console.log("server on port 4000");
})