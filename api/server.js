const express = require('express');
const server = express();
//routers
const authRouter = require('./auth/authRouter');
const guestRouter = require('./guest/guest-router');
const userRouter = require('./users/users-router');
//imports
const session = require('express-session');
const logger = require('morgan');
const KnexSessionStore = require('connect-session-knex')(session);
const cors = require('cors');
const helmet = require('helmet');

//session config
const sessionConfig = {
    name:'a-session',
    secret: 'keep it secret keep it safe',
    cookie:{
        maxAge: 60 * 60 * 1000,
        secure: false ,//true in production
        httpOnly: true
    },
    resave: true,
    saveUninitialized: true,
    store: new KnexSessionStore({
        knex: require('../data/dbConfig'),
        table: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 60 * 60 * 1000
    })
}


// middlewares
server.use(session(sessionConfig));
server.use(logger('short'), helmet(), cors(), express.json());
server.use('/api/auth', authRouter );
server.use('/api/items', guestRouter);
server.use('/api/users', userRouter);



server.get('/', (req, res)=>{
    res.status(200).json({Message: `Hello from the root api.`});
})





module.exports = server;