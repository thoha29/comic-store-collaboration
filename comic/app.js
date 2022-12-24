require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routers");

app.use(routes);
app.listen(port, () => {
  console.log(`App is litening form port ${port}`);
});
