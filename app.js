const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.use("/users", require("./routes/users"));
// http://localhost:3333/users/signin

// Start the server
const port = process.env.APP_PORT || 3333;
app.listen(port);
console.log(`Server listening at ${port}`);
