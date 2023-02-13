var http = require("http");
var url = require("url");
//create a server object:
const fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    const finished = (error) => {
      if (error) {
        console.error(error);
        return;
      }
    };
    var q = url.parse(req.url, true).query;
    // const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile(q.fileName, q.data, finished);
    res.end(); //end the response
    //lo.../?fileName=venkat.json & data=""
  })
  .listen(8080); //the server object listens on port 8080
