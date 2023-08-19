const { EventRepository } = require("../database");

const { APIError, BadRequestError } = require("../utils/app-errors");

// All Business logic will be here
const repository = new EventRepository();

module.exports.RegEvent_service = async (Eventdata) => {
  try {
    console.log("service", Eventdata.Address);
    let getData = await repository.RegEvent_Repo(Eventdata);
    return getData;
  } catch (err) {
    console.log("error in the service", err);
    throw new APIError("err in the service", err);
  }
};

module.exports.delEvent_service = async (Eventdata) => {
  try {
    console.log("service", Eventdata);
    let getData = await repository.delEvent_Repo(Eventdata);
    console.log("service return", getData);
    return getData;
  } catch (err) {
    console.log("error in the err in te service", err);
    throw new APIError("err in the service", err);
  }
};

module.exports.SubscribeEvents = async (Eventdata) => {
  const { event, data } = payload;

  const { userId, product, order, qty } = data;

  switch (event) {
    case "TEST":
      console.log("worrking fine");
      break;
    default:
      break;
  }
};
