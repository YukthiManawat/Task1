

//Import HTTP module from nodejs
const http =require('http');

//Create a new HTTP server Instance
const server = http.createServer((req,res)=>{
    //When a client sends a request send the HTTP response
    res.end('Server Response');
});
 
//Start the server listening for incoming HTTP request on port 3000
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});