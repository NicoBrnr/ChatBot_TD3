'use strict';

//import the express module, which is a function
const express =require('express')
const config = require('./config');
const FBeamer = require('./fbeamer');

const token = new FBeamer(config.FB);

//call this function
const server = express();
const PORT = process.env.PORT || 3000;

//get function of our server
// '/' represent the home page of our server
// req and res are the request that were sent to the server
server.get('/', (req, res) => token.registerHook(req,res));

//start the server
server.listen(PORT, () => console.log('the bot server si running on the port : '+PORT));