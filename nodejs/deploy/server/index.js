/// <reference path="./../typings/tsd.d.ts" />
var modem = require('modem').Modem();
// var SerialPort = require('serialport');
// SerialPort.list(function (err, ports) {
//   ports.forEach(function(port) {
//     if(port.comName=='COM39'){
//     console.log(port.comName);
//     console.log(port.pnpId);
//     console.log(port.manufacturer);
//   }
//   });
// });
modem.open('COM39', function () {
    modem.sms({
        receiver: '923155923218',
        text: 'hello saad this is mode generated sms',
        encoding: '16bit'
    }, function (err, sent_ids) {
        console.log('>>', arguments);
        if (err)
            console.log('Error sending sms:', err);
        else
            console.log('Message sent successfully, here are reference ids:', sent_ids.join(','));
    });
});
// var express = require('express');
// var app = express();
// var mysql      = require('mysql'); // Mysql conection guide https://www.codementor.io/nodejs/tutorial/node-js-mysql
// var pool      =    mysql.createPool({
//      connectionLimit : 100, //important
//      host     : 'localhost',
//      user     : 'root',
//      password : '',
//      database : 'picreatix',
//      debug    :  false
//  });
//  function handle_database(req, res) {
//      pool.getConnection(function(err,connection){
//          if (err) {
//            connection.release();
//            res.json({"code" : 100, "status" : "Error in connection database"});
//            return;
//          }   
//          console.log('connected as id ' + connection.threadId);
//          connection.query("select * from migration", function(err,rows){
//              connection.release();
//              if(!err) {
//                  res.json(rows);
//              }           
//          });
//          connection.on('error', function(err) {      
//                res.json({"code" : 100, "status" : "Error in connection database"});
//                return;     
//          });
//    });
//  }
// //  connection.connect(function(err){
// //  if(!err) {
// //      console.log("Database is connected ... \n\n");  
// //  } else {
// //      console.log("Error connecting database ... \n\n");  
// //  }
// //  });
// //  connection.query('SELECT * from migration', function(err, rows, fields) {
// //    if (!err)
// //      console.log('The solution is: ', rows);
// //    else
// //      console.log('Error while performing Query.');
// //  });
// //  connection.end();
// // This responds with "Hello World" on the homepage
// app.get('/', function (req, res) {
//    console.log("Got a GET request for the homepage");
// //    res.send('Hello GET');
//     handle_database(req, res);
// })
// // This responds a POST request for the homepage
// app.post('/', function (req, res) {
//    console.log("Got a POST request for the homepage");
//    res.send('Hello POST');
// })
// // This responds a DELETE request for the /del_user page.
// app.delete('/del_user', function (req, res) {
//    console.log("Got a DELETE request for /del_user");
//    res.send('Hello DELETE');
// })
// // This responds a GET request for the /list_user page.
// app.get('/list_user', function (req, res) {
//    console.log("Got a GET request for /list_user");
//    res.send('Page Listing');
// })
// // This responds a GET request for abcd, abxcd, ab123cd, and so on
// app.get('/ab*cd', function(req, res) {   
//    console.log("Got a GET request for /ab*cd");
//    res.send('Page Pattern Match');
// })
// var server = app.listen(8081, function () {
//   var host = server.address().address
//   var port = server.address().port
//   console.log("Example app listening at http://%s:%s", host, port)
// }) 
