/*jshint esversion: 6 */

const Express = require('express');
const BodyParser = require('body-parser');
const Http = require("http");
const HttpsClient = require("request");

const _express = Express();
const _httpServer = Http.createServer(_express);

_express.use(BodyParser.json
({

    extended: true

}));

_express.use(BodyParser.urlencoded
({

    extended: true

}));

_express.get('/api', (req, res) =>
{

    res.send("This is another workshop_docker GET\n");
    
});

_express.post('/api/post', (req, res) =>
{
    
    res.send('This is another workshop_docker POST\n');

});

let port = process.env.PORT || 7007;
let host = "0.0.0.0";
_httpServer.listen(port, host, function ()
{

    console.log(`Another Docker container started the server on port ${_httpServer.address().port}\n`);

});

_httpServer.on("close", function ()
{

    console.log("We are Closing\n");    


});

process.on("SIGINT", function()
{
    _httpServer.close();

});
