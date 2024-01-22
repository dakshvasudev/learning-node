const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>NOTHING URL</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h3>THE SERVER IS UP AND RUNNING! CONGRATULATIONS!</h3>");
    res.write("<form action='/create-user' method='POST'>");
    res.write("<input type='text' name='username'></input>");
    res.write("<button type='submit'>Send</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/user") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>LIST OF DUMMY USERS</title>");
    res.write("</head>");
    res.write("<body>");
    res.write(
      "<ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></ul>"
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method == "POST") {
    req.on("data", (data) => {
      console.log(data.toString());
    });
    req.on("end", () => {
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

module.exports = requestHandler;
