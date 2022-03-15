let http = require('http');

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
        res.end(store);
      }
    }

    if(req.method === 'POST' && req.url === '/form'){
      if(formtype === 'application/x-www-form-urlencoded'){
        res.end(store);
      }
    }
  });
}

server.listen(4000, () => {
  console.log('server port on 4k');
})