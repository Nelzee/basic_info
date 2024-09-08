var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    var myUrl = url.parse(req.url);
    var pathname = myUrl.pathname.startsWith("/")
      ? myUrl.pathname.substring(1)
      : myUrl.pathname;

    fs.readFile(`${pathname}.html`, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
