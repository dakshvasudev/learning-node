const http = require("https");
const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3000);
