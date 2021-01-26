const express = require("express");
const app = express();
const mongoose = require("mongoose");



// routers
const taskRouter = require('./router/task-router')

const port = process.env.PORT;

app.use(express.json())
app.use('/app', taskRouter)

app.listen(port, () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("server connect to the port", port);
    })
    .catch((error) => console.log(error));
  console.log();
});
