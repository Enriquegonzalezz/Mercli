const express = require('express');
const { PORT } = require("./config");
const { createUsersRouter } = require("./Users/usersRoutes");
require('dotenv/config');
//server
const app = express();


app.use(express.json());


app.use("/", createUsersRouter());

console.log({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})

