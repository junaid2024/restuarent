// 1 -import json-server 

const jsonSever = require('json-server')

// 2 -create a server application

const restServer = jsonSever.create()

// 3 -set path for db.json

const router = jsonSever.router('db.json')

// 4 -return a middlware instance used by json-server\

const middlware =jsonSever.defaults()

// 5 -setup port for db.json

const port = 3001

// 6 -used in server

restServer.use(middlware)
restServer.use(router)

// 7-to run  the sever(restserver)

restServer.listen(port,()=>{
    console.log("rest server listening on port"+port);
})