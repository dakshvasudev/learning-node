/// importing http
const http = require("http");
const fs = require("fs");

///creating a server using http, and sending a function that takes request and gives response
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>Enter your message</title></head><body><form action = '/message' method='POST'><input type='text' name='message'></input><button type='submit'>Send</button></form></body></html>"
    );
    return res.end();
  }
  if (url == "/message") {
    res.setHeader("Content-Type", "text/html");
    fs.writeFileSync("message.txt", "DUMMY");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

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
