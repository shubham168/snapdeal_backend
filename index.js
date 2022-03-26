const express = require("express");
require("dotenv").config();
const router = require("./routes/router");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use("/", router);
app.use(cors());

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    });
    console.log(`listening to port ${process.env.PORT}`);
  } catch (e) {
    console.log(`something went wrong ${e.message}`);
  }
});
