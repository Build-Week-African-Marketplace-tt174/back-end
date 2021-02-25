const express = require('express');
const server = express();

const authRouter = require('./authRouter')

const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

server.use(logger('short'), helmet(), cors());
server.use('/api/auth', authRouter )



server.get('/api', (req, res)=>{
    res.status(200).json({Message: `Hello from the root api.`});
})





module.exports = server;