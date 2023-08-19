const express = require("express");
const cors = require("cors");
const { Event, appEvent } = require("./api");
const HandleErrors = require("./utils/error-handler");
const bodyParser = require("body-parser");
module.exports = async (app) => {
  app.use(express.json({ limit: "500mb" }));
  app.use(cors());
  app.use(express.static(__dirname + "/public"));
  app.use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: false,
    })
  );
  app.use(bodyParser.json({ limit: "50mb" }));
  // app.use(fileUpload());
  //Listen To Event
  appEvent(app);

  //api
  Event(app);

  // error handling
  app.use(HandleErrors);
};
