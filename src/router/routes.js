const { Router } = require("express");

const {
  getCity,
  getCityPerName,
  getState,
  createCity,
} = require("../controller/cityController.js");

const {
  getUser,
  getUserPerName,
  getUserPerId,
  updateUser,
  deleteUser,
  createUser,
} = require("../controller/userController.js");

const routes = Router();

routes.route("/cidade").post(createCity).get(getCity);

routes.route("/cidade/search/:city").get(getCityPerName);

routes.route("/cidade/:state").get(getState);

routes.route("/usuario").post(createUser).get(getUser);
routes
  .route("/usuario/search/:name")
  .get(getUserPerName)
  .put(updateUser)
  .delete(deleteUser);
routes.route("/usuario/:id").get(getUserPerId);

module.exports = routes;
