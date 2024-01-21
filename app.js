/// importing http
const http = require("http");

///creating a server using http, and sending a function that takes request and gives response
const server = http.createServer((req, res) => {
  console.log(req);
  ///exiting the process otherwise the loop will never end and the server will always be up and running
  ///After this the code is completed.
  process.exit();
});

///specifying the server port as 3000 where I need to listen.
server.listen(3000);
