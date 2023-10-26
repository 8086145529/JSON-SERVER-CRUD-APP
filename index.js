// import json-server in index.js using require method
const jsonServer = require('json-server')

// create a json server using json-server library
const crudappServer = jsonServer.create() // jsonServer.create() means json-server libraryile create method use cheyth oru json serverine create cheyunnu

// setup path for db.json file
router = jsonServer.router("db.json") // json-server libraryile router method use cheyth db.json fileinte path set cheyunnu

// Returns middlewares used by JSON Server
const middleware= jsonServer.defaults() // jsonServer.defaults() ith kodukkunathinte reason it returns middlewares used by JSON Server.

// setup port for server app
const port = 4000 || process.env.PORT // process.env.PORT, This is to dynamically change the port from 4000 on deploying this server app using some webservices if 4000 port is not available on the webservice at the time of deploying

// use middleware and router in server app
crudappServer.use(middleware)
crudappServer.use(router)

//server listen for request from frontend 
crudappServer.listen(port,()=>{
    console.log(`Crud app server started at port: ${port}, and waiting for client request!!`);
})

// ithreyum cheyumbol frontendil ninnum oru request varumbol,ath directly crudappServerile(Server app) db.json fileilek varum