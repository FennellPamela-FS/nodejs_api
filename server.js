const http = require('http');
const app = require('./app/app');
require("dotenv").config();

// request listener
http.createServer(app).listen(process.env.port, () => {
    console.log(`Server running on ${process.env.port}`);
}); 
