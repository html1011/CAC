var http = require('http'),
fs = require("fs")
//create a server object:
http.createServer((req, res) => {
  console.log(req.url)
  fs.readFile(req.url == "/" ? "code.html" : "C:/Users/sarah/CAC/" + req.url, (err, message) => {
    if(err) {
      console.log("Couldn't find.")
      res.writeHead(404);
      res.write("Couldn't find!")
      res.end();
    }
    else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(message);
      res.end();
    }
  })
}).listen(8080, "192.168.1.255"); //the server object listens on port 8080
