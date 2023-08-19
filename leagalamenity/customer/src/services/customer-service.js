const { CustomerRepository } = require("../database");
const {
  FormateData,
  GeneratePassword,
  GenerateSalt,
  GenerateSignature,
  ValidatePassword,
} = require("../utils");
const { APIError, BadRequestError, AppError } = require("../utils/app-errors");

// All Business logic will be here
class CustomerService {
  constructor() {
    this.repository = new CustomerRepository();
  }

  async SignIn(userInputs) {
    const { email, password } = userInputs;

    try {
      const existingCustomer = await this.repository.FindCustomer({ email });

      if (existingCustomer) {
        const validPassword = await ValidatePassword(
          password,
          existingCustomer.password,
          existingCustomer.salt
        );

        if (validPassword) {
          const token = await GenerateSignature({
            email: existingCustomer.email,
            _id: existingCustomer._id,
          });
          return FormateData({ id: existingCustomer._id, token });
        }
      }

      return FormateData(null);
    } catch (err) {
      console.log("error in service", err);
      throw err;
    }
  }

  async SignUp(userInputs) {
    try {
      console.log("in the student ", userInputs);
      let salt = await GenerateSalt();
      let existingCustomer;
      let userPassword = await GeneratePassword(userInputs.password, salt);

      delete userInputs.password;

      existingCustomer = await this.repository.CreateCustomer(
        userInputs,
        userPassword,
        salt
      );

      // create salt
      console.log("final==", existingCustomer);
      const token = await GenerateSignature({
        email: userInputs.email,
        _id: existingCustomer._id,
      });

      return FormateData({ id: existingCustomer._id, token });
    } catch (err) {
      console.log("error in service", err);
      throw err;
    }
  }

  async deleteUser(userInputs) {
    try {
      let repoData = this.repository.deleteUser_repo(userInputs);
      return repoData;
    } catch (err) {
      console.log("error in service", err);
      throw err;
    }
  }

  async updateUser(userInputs) {
    try {
      let repoData = this.repository.updateUser_repo(userInputs);

      return repoData;
    } catch (err) {
      console.log("error in service", err);
      throw err;
    }
  }

  async FindCustomer(userInputs) {
    try {
      let repoData = this.repository.FindCustomer(userInputs);
      delete repoData.salt;
      delete repoData.password;
      return repoData;
    } catch (err) {
      console.log("error in service", err);
      throw err;
    }
  }

  async passwordChange(userInputs) {
    try {
      let salt = await GenerateSalt();
      let userPassword = await GeneratePassword(userInputs.password, salt);
      userInputs.password = userPassword;
      userInputs.salt = salt;
      let repoData = this.repository.PasswordChange(userInputs);
      delete repoData.salt;
      delete repoData.password;
      return repoData;
    } catch (err) {
      console.log("error in service", err);
      throw err;
    }
  }

  async getAllCustomer() {
    try {
      let repoData = this.repository.GetAllCustomer();
      return repoData;
    } catch (err) {
      console.log("error in service", err);
      throw err;
    }
  }

  async SubscribeEvents(payload) {
    const { event, data } = payload;

    const { userId, product, order, qty } = data;

    switch (event) {
      case "TEST":
        console.log("worrking fine");
        break;
      default:
        break;
    }
  }
}

module.exports = CustomerService;
