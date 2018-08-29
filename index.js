const http = require('http')

http.createServer((req, res) => {
  res.write(req.headers['x-forwarded-for'])
  res.end()
}).listen(8080)
