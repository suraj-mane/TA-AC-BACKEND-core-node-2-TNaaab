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
    if(dataformat === "application/json"){
      var parseData = JSON.parse(store);
      res.end(store);
    }

    if(dataformat === "application/x-www-form-urlencoded"){
      var parseData = qs.parse(store);
      res.end(JSON.stringify(parseData));
    }
  })
}

server.listen(4000, () => {
  console.log("server on port 4000");
})