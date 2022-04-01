const { userModel } = require("../models/user.model");
const nodemailer = require("nodemailer");
const user_get = async (req, res) => {
  let user;
  try {
    // let id = req.body.id;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let googleId = req.body.googleId;
    let facebookId = req.body.facebookId;
    let password = req.body.password;
    // if (id) {
    //   user = await userModel.findById(id);
    //   if (user.password != password) {
    //     res.status(403).send("email or passowrd is wrong");
    //   }
    // } else
    const otp = Math.floor(1000 + Math.random() * 9000);
    console.log(otp);
    if (email || mobile) {
      user = await userModel.findOne({ email: email });
      await userModel.updateOne({ email: email }, { otp: otp });
      if (!user && mobile) {
        user = await userModel.findOne({ mobile: mobile });
      }
    } else if (googleId) {
      user = await userModel.findOne({ googleId: googleId });
      if (user) {
        await userModel.updateOne(
          { googleId: googleId },
          { otp: req.body.otp }
        );
        res.status(200).json({ message: "user verified", data: user });
      }
    } else if (facebookId) {
      user = await userModel.findOne({ facebookId: facebookId });
      if (user) {
        await userModel.updateOne(
          { facebookId: facebookId },
          { otp: req.body.otp }
        );
        res.status(200).json({ message: "user verified", data: user });
      }
    }
    if (!user) {
      res.status(404).send("create user");
    } else if (email) {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "fakesnapdealclone@gmail.com", // generated ethereal user
          pass: "pw2_snapdeal", // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
        from: "fakesnapdealclone@gmail.com", // sender address
        to: `${email}`, // list of receivers
        subject: "Hello ✔", // Subject line
        text: `Your OTP for login is ${otp}`, // plain text body
      });

      res.status(200).json({ message: "otp sent please verify", data: user });
    }
  } catch (e) {
    console.log(e);
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

const user_otp = async (req, res) => {
  let email = req.body.email;
  let mobile = req.body.mobile;
  let otp = req.body.otp;
  let user;
  try {
    if (email || mobile) {
      user = await userModel.findOne({ email: email });

      if (!user && mobile) {
        user = await userModel.findOne({ mobile: mobile });
      }
    }

    if (user && user.otp == otp) {
      res.status(200).send("logged in successfully");
    } else {
      console.log(user.otp, otp);
      res.status(403).json({ message: "otp miss matched" });
    }
  } catch (e) {
    res.status(502).send("something went wrong here ::...");
  }
};
module.exports = {
  user_get,
  user_otp,
  user_post,
};
