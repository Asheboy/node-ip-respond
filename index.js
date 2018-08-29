const http = require('http')

http.createServer((req, res) => {
  const ip = req.headers['x-forwarded-for']
  if (ip) res.write(req.headers['x-forwarded-for'])
  res.end()
}).listen(8080)
