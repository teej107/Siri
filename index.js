/**
 * Created by tanner on 3/7/17.
 */
var express = require('express');
var app = express();

var port = 8887;

var messages = ['Hello there!', "I'm sorry, I cannot take any requests at this time", 'I can tell you how to do that.'];

app.listen(port, function ()
{
    console.log("Listening on port", port);
});

function createHeader()
{
    return {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection':'1; mode=block',
        'X-Frame-Options':'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    };
}

app.options('/', function (req, res)
{
   res.status(200).set(createHeader()).send(JSON.stringify({
       message: messages[getRandomInt(0, messages.length)]
   }));
});

app.get('/', function (req, res)
{
    res.status(200).set(createHeader()).send(JSON.stringify({
        message: messages[getRandomInt(0, messages.length)]}
        ));
});

function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}



