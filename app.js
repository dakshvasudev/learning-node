/// importing http
const http = require("http");
const fs = require("fs");

///creating a server using http, and sending a function that takes request and gives response
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>Enter your message</title></head><body><form action = '/message' method='POST'><input type='text' name='message'></input><button type='submit'>Send</button></form></body></html>"
    );
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (data) => {
      console.log(data);
      body.push(data);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
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
