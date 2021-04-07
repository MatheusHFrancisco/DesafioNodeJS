const mongoDB = require("../connectors/mongoDbConnector.js");
const { v4: uuidv4 } = require("uuid");

const getUser = async (req, res) => {
  try {
    const Users = mongoDB.mongoose.model("User", mongoDB.userSchema);
    const user = await Users.find().exec();
    res.send(user);
  } catch (error) {
    if (error) return res.status(404).send("User doenst exist");
  }
};

const getUserPerName = async (req, res) => {
  try {
    const userName = req.params.name;
    const Users = mongoDB.mongoose.model("User", mongoDB.userSchema);
    const user = await Users.find({ name: `${userName}` }).exec();
    res.send(user);
  } catch (error) {
    if (error) return res.status(404).send("User doesn't exist");
  }
};

/* const getUserPerId = async (req, res) => {
  try {
    const userId = req.params.id;
    const Users = mongoDB.mongoose.model("User", mongoDB.userSchema);
    const user = await Users.findOne({ id: `${userId}` });
    res.send(user);
  } catch (error) {
    if (error) return res.status(404).send("User doenst exist");
  }
}; */

const getUserPerId = async (req, res) => {
  try {
    const userId = req.params.id;
    const Users = mongoDB.mongoose.model("User", mongoDB.userSchema);
    const user = await Users.findById(userId).exec();
    res.send(user);
  } catch (error) {
    if (error) return res.status(404).send("User doesn't exist");
  }
};

const createUser = (req, res) => {
  const userName = req.body.name;
  const sex = req.body.sex;
  const dataOfBirth = req.body.dataOfBirth;
  const age = req.body.age;
  const cityLive = req.body.cityLive;
  const id = uuidv4();

  const Users = mongoDB.mongoose.model("User", mongoDB.userSchema);
  const user = new Users({
    id: id,
    name: userName,
    sex: sex,
    dataOfBirth: dataOfBirth,
    age: age,
    cityLive: cityLive,
  });

  user.save((error) => {
    if (error) {
      console.log(error);
      return error;
    } else {
      res.json(user);
    }
  });
};

const updateUser = async (req, res) => {
  const userName = req.params.name;
  const Users = mongoDB.mongoose.model("User", mongoDB.userSchema);
  const user = await Users.findOneAndUpdate({ name: `${userName}` }).exec();
  user.save((error) => {
    if (error) {
      console.log(error);
      return error;
    } else {
      res.json(user);
    }
  });
};

const deleteUser = async (req, res) => {
  const userName = req.params.name;
  const Users = mongoDB.mongoose.model("User", mongoDB.userSchema);
  const user = await Users.findOneAndRemove({ name: `${userName}` }).exec();
  res.json({});
};

module.exports = {
  getUser,
  getUserPerName,
  getUserPerId,
  createUser,
  updateUser,
  deleteUser,
};
