import mongoose = require("mongoose");

interface IUserModel extends mongoose.Document {
  name: string;
  email: string;
  password: string;
}

export = IUserModel;
