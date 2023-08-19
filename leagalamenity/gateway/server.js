var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var proxy = require("express-http-proxy");
require("dotenv").config();
const app = express();
const defaultPort = process.env.defaultPort;
const customerPort = process.env.customerPort;
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors("*"));
app.use("/customer", proxy(`http://localhost:${customerPort}`));
app.use("/event", proxy("http://localhost:8002"));
// app.use("/product", proxy("http://localhost:8001"));

app.listen(defaultPort, () => {
  console.log("listen from gatway port: ", defaultPort);
});

app.use("/", (req, res, next) => {
  return res.status(200).json("gatway is started");
});
