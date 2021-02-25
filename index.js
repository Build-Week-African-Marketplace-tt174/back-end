const server = require('./api/server');

const PORT = 5000 || process.env.PORT;

server.listen(PORT, ()=>{
    console.log(`=== Server is listening on PORT ${PORT} ===`)
})

