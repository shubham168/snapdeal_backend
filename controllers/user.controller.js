const { userModel } = require("../models/user.model");

const user_get = async (req, res) => {
  let user;
  try {
    // let id = req.body.id;
    let email = req.body.email;
    let googleId = req.body.googleId;
    let facebookId = req.body.facebookId;
    let mobile = req.body.mobile;
    let password = req.body.password;
    // if (id) {
    //   user = await userModel.findById(id);
    //   if (user.password != password) {
    //     res.status(403).send("email or passowrd is wrong");
    //   }
    // } else

    if (email || mobile) {
      user = await userModel.findOne({ email: email });
      if (!user && mobile) {
        user = await userModel.findOne({ mobile: mobile });
      }
    } else if (googleId) {
      user = await userModel.findOne({ googleId: googleId });
    } else if (facebookId) {
      user = await userModel.findOne({ facebookId: facebookId });
    }
    if (user && user.password != password) {
      res.status(403).send("email or passowrd is wrong");
    } else if (!user) {
      res.status(404).send("create user");
    } else {
      res.status(200).json(user);
    }
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

const user_post = async (req, res) => {
  try {
    let newUser = await userModel.create(req.body);
    res.status(200).json(newUser);
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};

module.exports = {
  user_get,
  user_post,
};
