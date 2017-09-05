var http = require("http");

function send404Response (response){
    ;
    fs.createReadStream("./path/to/404.html").pipe(response);
}

function onRequest (request, response){
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write("<html><head></head><body>heellooo</body></html>")
    response.flushHeaders()
    response.end()
}

http.createServer(onRequest).listen(8080);