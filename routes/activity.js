'use strict';
var util = require('util');

// Deps
const Path = require('path');
const JWT = require(Path.join(__dirname, '..', 'lib', 'jwtDecoder.js'));
var http = require('https');

exports.logExecuteData = [];

function logData(req) {
    exports.logExecuteData.push({
        body: req.body,
        headers: req.headers,
        trailers: req.trailers,
        method: req.method,
        url: req.url,
        params: req.params,
        query: req.query,
        route: req.route,
        cookies: req.cookies,
        ip: req.ip,
        path: req.path,
        host: req.host,
        fresh: req.fresh,
        stale: req.stale,
        protocol: req.protocol,
        secure: req.secure,
        originalUrl: req.originalUrl
    });
    console.log("body: " + util.inspect(req.body));
    console.log("headers: " + req.headers);
    console.log("trailers: " + req.trailers);
    console.log("method: " + req.method);
    console.log("url: " + req.url);
    console.log("params: " + util.inspect(req.params));
    console.log("query: " + util.inspect(req.query));
    console.log("route: " + req.route);
    console.log("cookies: " + req.cookies);
    console.log("ip: " + req.ip);
    console.log("path: " + req.path);
    console.log("host: " + req.host);
    console.log("fresh: " + req.fresh);
    console.log("stale: " + req.stale);
    console.log("protocol: " + req.protocol);
    console.log("secure: " + req.secure);
    console.log("originalUrl: " + req.originalUrl);
}

/*
 * POST Handler for / route of Activity (this is the edit route).
 */
exports.edit = function (req, res) {

    console.log("5 -- For Edit");
    console.log("4");
    console.log("3");
    console.log("2");
    console.log("1");
    //console.log("Edited: "+req.body.inArguments[0]);    

    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    logData(req);
    res.send(200, 'Edit');
};

/*
 * POST Handler for /save/ route of Activity.
 */
exports.save = function (req, res) {

    console.log("5 -- For Save");
    console.log("4");
    console.log("3");
    console.log("2");
    console.log("1");
    //console.log("Saved: "+req.body.inArguments[0]);

    // Data from the req and put it in an array accessible to the main app.
    console.log(req.body);
    logData(req);
    res.send(200, 'Save');
};

/*
 * POST Handler for /execute/ route of Activity.
 */
exports.execute = function (req, res) {

    console.log("5 -- For Execute");
    console.log("4");
    console.log("3");
    console.log("2");
    console.log("1");


    var requestBody = req.body.inArguments[0];

    const accountSid = requestBody.accountSid;
    const authToken = requestBody.authToken;
    const to = requestBody.to;
    const from = requestBody.messagingService;
    const body = requestBody.body;
    console.log("requestBody: " + requestBody);
    console.log("ExecutedaccountSid: " + accountSid);
    console.log("ExecutedauthToken: " + authToken);
    console.log("Executedto: " + to);
    console.log("Executedfrom: " + from);
    console.log("Executedbody: " + body);

    const https = require('https');
    const options = {
        hostname: 'jsonplaceholder.typicode.com',
        port: 443,
        path: '/todos',
        method: 'GET',
    };

    const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', d => {
            process.stdout.write(d);
        });
    });

    req.on('error', error => {
        console.error(error);
    });

    // function UserAction() {
    // var xhttp = new XMLHttpRequest();
    // console.log("ExecutedaccountSidwwww: ");
    // xhttp.onreadystatechange = function() 
    // {  console.log("Executedaccountwssssssssssss:");
    //      if (this.readyState == 4 && this.status == 200) 
    //      {
    //         console.log("Executedaccountwsssssssssssdaads:");
    //          alert(this.responseText);
    //      }
    // };
    // xhttp.open("POST", "Your Rest URL Here", true);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send("Your JSON Data Here");
    // console.log("Executedaccountwsssssssssssdadas:");
    // }


    //     const userAction = async () => {
    //   const response = await fetch('http://example.com/movies.json', {
    //     method: 'POST',
    //     body: myBody, // string or object
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });
    //   const myJson = await response.json(); //extract JSON from the http response
    //   // do something with myJson
    // }

    // const client = require('twilio')(accountSid, authToken);
    //    client.messages
    //    .create({body: body, from: '+12562903890', to: to, messagingService: from})
    //    .then(message => console.log(message.sid))
    //    .done();

    //     // const accountSid = requestBody.accountSid;
    //     // const authToken = requestBody.authToken;
    //      const client = require('twilio')(accountSid, authToken);

    //     client.messages
    //           .create({
    //                  from: 'whatsapp:+14155238886',
    //                  body: 'Hello, there!',
    //                  to: 'whatsapp:+919294641435'
    //                    })
    //                  .then(message => console.log(message.sid));

    //     client.messages
    //         .create({body: 'hiiii', from: '+12562903890', to:'+919294641435', messagingService: 'MG802cbf02ab002f689462d6ebe8fd5f9b'})
    //         .then(message => console.log(message.sid))
    //         .done();

    // FOR TESTING
    logData(req);
    //  res.send(200, 'Publish');

    // Used to decode JWT
    // JWT(req.body, process.env.jwtSecret, (err, decoded) => {

    //     // verification error -> unauthorized request
    //     if (err) {
    //         console.error(err);
    //         return res.status(401).end();
    //     }

    //     if (decoded && decoded.inArguments && decoded.inArguments.length > 0) {

    //         // decoded in arguments
    //         var decodedArgs = decoded.inArguments[0];

    //         logData(req);
    res.send(200, 'Execute');
    //     } else {
    //         console.error('inArguments invalid.');
    //         return res.status(400).end();
    //     }
    // });
};


/*
 * POST Handler for /publish/ route of Activity.
 */
exports.publish = function (req, res) {

    console.log("5 -- For Publish");
    console.log("4");
    console.log("3");
    console.log("2");
    console.log("1");
    //console.log("Published: "+req.body.inArguments[0]);        

    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    //     logData(req);
    res.send(200, 'Publish');
};

/*
 * POST Handler for /validate/ route of Activity.
 */
exports.validate = function (req, res) {

    console.log("5 -- For Validate");
    console.log("4");
    console.log("3");
    console.log("2");
    console.log("1");
    //console.log("Validated: "+req.body.inArguments[0]);       

    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    logData(req);
    res.send(200, 'Validate');
};
