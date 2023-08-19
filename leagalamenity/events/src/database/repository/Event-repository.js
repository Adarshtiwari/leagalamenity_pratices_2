const { EventsModel } = require("../models");
const {
  APIError,
  BadRequestError,
  STATUS_CODES,
} = require("../../utils/app-errors");
//Dealing with data base operations
class EventRepository {
  async RegEvent_Repo(req) {
    try {
      let newEvent = {};
      newEvent.date = "" + new Date();
      newEvent.Address = req.Address;
      newEvent.eventor_name = req.eventor_name;
      newEvent.content = req.content;
      newEvent.img = req.img;
      newEvent = new EventsModel({ newEvent });
      console.log("new Event", newEvent);
      let imgdata = await newEvent.save();
      return imgdata;
    } catch (err) {
      console.log("in the err of service", err);

      throw new APIError("err in the service", err);
    }
  }
  async delEvent_Repo(req) {
    try {
      console.log("repo=  ", req._id);
      return await EventsModel.deleteMany(req);
    } catch (err) {
      console.log("in the err of repo", err);
      throw new APIError("err in the service", err);
    }
  }
}

module.exports = EventRepository;
