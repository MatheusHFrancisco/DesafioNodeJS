const mongoDB = require("../connectors/mongoDbConnector.js");

const getCity = async (req, res) => {
  try {
    const Cities = mongoDB.mongoose.model("City", mongoDB.citySchema);
    const city = await Cities.find().exec();
    res.send(city);
  } catch (error) {
    if (error) return res.status(404).send("City doesnt exist");
  }
};

const getCityPerName = async (req, res) => {
  try {
    const cityName = req.params.city;
    const Cities = mongoDB.mongoose.model("City", mongoDB.citySchema);
    const city = await Cities.find({ name: `${cityName}` }).exec();
    res.send(city);
  } catch (error) {
    if (error) return res.status(404).send("City doesnt exist");
  }
};

const getState = async (req, res) => {
  try {
    const stateName = req.params.state;
    const Cities = mongoDB.mongoose.model("City", mongoDB.citySchema);
    const state = await Cities.find({ state: `${stateName}` }).exec();
    res.send(state);
  } catch (error) {
    if (error) return res.status(404).send("State doesnt exist");
  }
};

const createCity = (req, res) => {
  const cityName = req.body.city;
  const state = req.body.state;

  const Cities = mongoDB.mongoose.model("City", mongoDB.citySchema);
  const city = new Cities({
    name: cityName,
    state: state,
  });

  city.save((error) => {
    if (error) {
      console.log(error);
      return error;
    } else {
      res.json(city);
    }
  });
};

const updateCity = () => {};

const deleteCity = () => {};

module.exports = {
  getCity,
  getCityPerName,
  getState,
  createCity,
  updateCity,
  deleteCity,
};
