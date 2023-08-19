const { UserModel, AddressModel } = require("../models");
const {
  APIError,
  BadRequestError,
  STATUS_CODES,
} = require("../../utils/app-errors");
const { decodePasword } = require("../../utils/index");
//Dealing with data base operations
class CustomerRepository {
  async CreateCustomer(userInputs, password, salt) {
    try {
      console.log("============", userInputs, "====", password, "==", salt);
      let user = userInputs;
      let email = user.email;
      delete user.email;
      const customer = new UserModel({ user, email, password, salt });
      const customerResult = await customer.save();
      return customerResult;
    } catch (err) {
      console.log("err in repo==", err);
      throw err;
    }
  }

  async deleteUser_repo(user) {
    try {
      let deleteUser = await UserModel.deleteOne(user);
      return deleteUser;
    } catch (err) {
      console.log("err in repo==", err);
      throw err;
    }
  }

  async updateUser_repo(user) {
    try {
      let email = user.email;
      delete user.email;
      let updateUser = await UserModel.updateOne(
        { email: email },
        {
          $set: { user },
        }
      );
      return updateUser;
    } catch (err) {
      console.log("err in repo==", err);
      throw err;
    }
  }

  async FindCustomer(user) {
    try {
      const existingCustomer = await UserModel.findOne({ email: user.email });
      console.log("user get ", existingCustomer);

      return existingCustomer;
    } catch (err) {
      console.log("err in repo==", err);
      throw err;
    }
  }

  async FindCustomerById({ id }) {
    try {
      const existingCustomer = await UserModel.findById(id);

      return existingCustomer;
    } catch (err) {
      console.log("err in repo==", err);
      throw err;
    }
  }

  async GetAllCustomer() {
    try {
      let findAllCustomer = await UserModel.find(
        {},
        { _id: 0, password: 0, salt: 0 }
      );
      console.log("all customer ", findAllCustomer);

      return findAllCustomer;
    } catch (err) {
      console.log("err in repo==", err);
      throw err;
    }
  }

  async PasswordChange(user) {
    try {
      let email = user.email;
      delete user.email;
      let data = await UserModel.updateOne(
        { email: email },
        {
          $set: {
            password: user.password,
            salt: user.salt,
          },
        }
      );

      console.log("in the password change data ", data);
      return data;
    } catch (err) {
      console.log("err in repo==", err);
      throw err;
    }
  }
}

module.exports = CustomerRepository;
