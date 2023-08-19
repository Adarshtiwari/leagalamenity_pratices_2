const EventService = require("../../services/events-service");

// const service_event = new EventService();
module.exports.createEvent = async (req, res, next) => {
  try {
    console.log("inside create event");
    let eventData = await EventService.RegEvent_service(req.body);
    console.log("req");
    res.send(eventData);
  } catch (err) {
    res.status(500).json({
      status: {
        StatusCode: 500,
        StatusType: "error",
        StatusMessage: "Record no inserted ",
      },
    });
  }
};

module.exports.deleteEvent = async (req, res, next) => {
  try {
    let eventData = await EventService.delEvent_service(req.body);
    console.log("req", eventData);
    res.send(eventData);
  } catch (err) {
    res.status(500).json({
      status: {
        StatusCode: 500,
        StatusType: "error",
        StatusMessage: "Record no inserted ",
      },
    });
  }
};
