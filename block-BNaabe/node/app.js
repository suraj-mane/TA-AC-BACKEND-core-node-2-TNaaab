let http = require('http');
let qs = require('querystring');

let server = http.createServer(handelAll);

function handelAll(req, res){
  let formtype = req.headers['content-type'];
  let store = '';
  req.on('data', (data) => {
    store += data;
  })
  
  req.on('end', () => {  
    if(req.method === 'POST' && req.url === '/json'){
      if(formtype === 'application/json'){
        let jsonData = JSON.parse(store);
        res.setHeader('content-type', 'text/html');
        res.end(`<h2>${jsonData.name}</h2><p>${jsonData.email}</p>`)
      }
    }

    if(req.method === 'POST' && req.url === '/form'){
      if(formtype === 'application/x-www-form-urlencoded'){
        var pasrsdata = qs.parse(store);
        res.setHeader('content-type', 'text/html');
        res.end(`<h2>${pasrsdata.name}</h2><p>${pasrsdata.email}</p>`);
      }
    }
  });
}

server.listen(4000, () => {
  console.log('server port on 4k');
})