const EventService = require("../services/events-service");

module.exports = (app) => {
  // const service = new EventService();
  app.use("/app-events", async (req, res, next) => {
    const { payload } = req.body;

    // service.SubscribeEvents(payload);

    console.log("----------shoping service recoeved Event");
    return res.status(200).json(payload);
  });
};
