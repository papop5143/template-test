/*var profile = {firstname:'papop' , lastname:'traisoonthorn'};
console.log(profile);*/

const { response } = require('express');
var http= require('http');
http.createServer((request,response) => {
    response.writeHead(200,{'content-type':'text/plain'})
    response.end('what the fuck is going on??\n');
})
.listen(8081)