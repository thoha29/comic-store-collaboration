require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const routes = require("./routers");

app.use(routes);
app.use("/uploads", express.static("./uploads"));
app.listen(port, () => {
  console.log(`App is litening form port ${port}`);
});
