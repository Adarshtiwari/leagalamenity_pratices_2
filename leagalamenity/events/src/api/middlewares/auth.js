const { ValidateSignature } = require("../../utils");

module.exports = async (req, res, next) => {
  const isAuthorized = await ValidateSignature(req);
  console.log("not authorise");
  if (isAuthorized) {
    console.log("authorise");
    return next();
  }
  return res.status(403).json({ message: "Not Authorized" });
};
