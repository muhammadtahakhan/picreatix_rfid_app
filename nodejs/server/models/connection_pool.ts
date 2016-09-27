/// <reference path="./../../typings/tsd.d.ts" />
var mysql      = require('mysql'); // Mysql conection guide https://www.codementor.io/nodejs/tutorial/node-js-mysql
var connection_pool      =    mysql.createPool({
     connectionLimit : 100, //important
     host     : 'localhost',
     user     : 'root',
     password : '',
     database : 'picreatix',
     debug    :  false
 });

 exports.connection_pool = connection_pool;