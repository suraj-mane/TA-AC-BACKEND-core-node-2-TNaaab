let path = require('path');
let http = require('http');
let qs = require('querystring');
console.log(__dirname);
let aap  = '/app.js';
let inde = './index.html';
console.log(__dirname,aap);
let joint = path.join(__dirname,"./index.html");
console.log(joint); 

let server = http.createServer(handelevent);

function handelevent(req, res){
  var dataForm = req.method['content-type'];
  let store = "";
  req.on('data', (chunk) => {
    store += chunk;
  });

  req.on('end', () => {
    res.writeHead(201, {
      'Content-Type': 'Appliction/json'
    });
    var datapars = qs.parse(store);
    res.end(JSON.stringify(datapars));
  })
}

server.listen(3000, () => {
  console.log('server on port 4k');
})
