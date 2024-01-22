/// importing http
const http = require("http");
const routes = require("./routes");

///creating a server using http, and sending a function that takes request and gives response
const server = http.createServer(routes);

///specifying the server port as 3000 where I need to listen.
server.listen(3000);
