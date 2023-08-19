const Controller = require("./controller/EventController");
const UserAuth = require("./middlewares/auth");

module.exports = (app) => {
  app.post("/eventcreate", UserAuth, Controller.createEvent);
  app.delete("/deleteEvent", UserAuth, Controller.deleteEvent);
};
