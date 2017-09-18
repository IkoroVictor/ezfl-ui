
const fs = require('fs');
const path = require('path');

const pathPrefix = './build';

const StaticRequestHandler = (request, response) => {

    console.log('request ', request.url);


    var filePath = pathPrefix + request.url;
    if (filePath == pathPrefix + "/" || request.url === "/static/")
        filePath = pathPrefix + "/index.html";

    var extname = String(path.extname(filePath)).toLowerCase();
    var contentType = 'text/html';
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.gif': 'image/gif',
        '.jpg': 'image/jpeg',
        '.json': 'application/json',
        '.png': 'image/png',
        '.svg': 'image/svg+xml'
    };
    contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function (error, content) {
        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile(pathPrefix + '/404.html', function (error, content) {
                    response.writeHead(404, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
                response.end();
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType, "Content-Length": content.byteLength });
            response.end(content);
        }
    });
}

module.exports = StaticRequestHandler;