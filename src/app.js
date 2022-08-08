const express = require("express");
const app = express();
require("./db/conn");
const studentRouter = require("./routers/student");
const port = 5000;

app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
