/// importing http
const http = require("http");

///creating a server using http, and sending a function that takes request and gives response
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  ///exiting the process otherwise the loop will never end and the server will always be up and running

  ///After this the code is completed.
  //   process.exit();

  ///playing with response -
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

///specifying the server port as 3000 where I need to listen.
server.listen(3000);
