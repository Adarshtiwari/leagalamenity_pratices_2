const CustomerService = require("../services/customer-service");
const UserAuth = require("./middlewares/auth");

module.exports = (app) => {
  const service = new CustomerService();

  app.post("/signup", async (req, res, next) => {
    try {
      req.body.status = "Active";
      const { data } = await service.SignUp(req.body);
      console.log("data receive for signup user in controller ", data);
      return res.json(data);
    } catch (err) {
      res.status(500).json({
        status: {
          StatusCode: 500,
          StatusType: "error",
          StatusMessage: `${err}`,
        },
      });
    }
  });

  app.post("/login", async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const { data } = await service.SignIn({ email, password });
      console.log("data receive for login user in controller ", data);
      return res.json(data);
    } catch (err) {
      res.status(500).json({
        status: {
          StatusCode: 500,
          StatusType: "error",
          StatusMessage: `${err}`,
        },
      });
    }
  });

  app.delete("/deleteuser", UserAuth, async (req, res, next) => {
    try {
      console.log("the deleteuser ", req.body);
      const data = await service.deleteUser(req.body);
      console.log("data receive for deleteuser in controller ", data);
      return res.status(200).json({
        status: {
          StatusCode: 200,
          StatusType: "Success",
          data: data,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: {
          StatusCode: 500,
          StatusType: "error",
          StatusMessage: `${err}`,
        },
      });
    }
  });

  app.patch("/updateuser", UserAuth, async (req, res, next) => {
    try {
      console.log("the updateUser ", req.body);
      const data = await service.updateUser(req.body);
      console.log("data receive for update user in controller ", data);
      return res.status(200).json({
        status: {
          StatusCode: 200,
          StatusType: "Success",
          data: `${data}`,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: {
          StatusCode: 500,
          StatusType: "error",
          StatusMessage: `${err}`,
        },
      });
    }
  });

  app.post("/passwordchange", UserAuth, async (req, res, next) => {
    try {
      console.log("the getcustomer ", req.body);
      const data = await service.passwordChange(req.body);
      console.log("data receive for passwordchange user in controller ", data);
      return res.status(200).json({
        status: {
          StatusCode: 200,
          StatusType: "Success",
          data: `${data}`,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: {
          StatusCode: 500,
          StatusType: "error",
          StatusMessage: `${err}`,
        },
      });
    }
  });

  app.post("/getcustomer", UserAuth, async (req, res, next) => {
    try {
      console.log("the getcustomer ", req.body);
      const data = await service.FindCustomer(req.body);
      console.log("data receive for getcustomer user in controller ", data);
      return res.status(200).json({
        status: {
          StatusCode: 200,
          StatusType: "Success",
          data: `${data}`,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: {
          StatusCode: 500,
          StatusType: "error",
          StatusMessage: `${err}`,
        },
      });
    }
  });

  app.get("/getAllcustomer", UserAuth, async (req, res, next) => {
    try {
      console.log("the  all getcustomer ");
      const data = await service.getAllCustomer();
      console.log("data receive for getcustomer user in controller ", data);
      return res.status(200).send(data);
    } catch (err) {
      res.status(500).json({
        status: {
          StatusCode: 500,
          StatusType: "error",
          StatusMessage: `${err}`,
        },
      });
    }
  });
};
