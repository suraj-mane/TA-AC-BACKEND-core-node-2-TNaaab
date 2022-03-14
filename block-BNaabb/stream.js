let http = require('http');

let server = http.createServer(handelserver);

function handelserver(req, res) {
  let store = '';
  req.on('data', (chunk) => {
    store = store + chunk;
  });

  req.on('end', () => {
    console.log(store);
  })
  res.write(store);
  res.end();
}

server.listen(5000, () => {
  console.log('server is on port 5000');
});
