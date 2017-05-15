import DataAccess = require('../DataAccess');
import IUserModel = require("../../model/interfaces/IUserModel");

var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

  static get schema() {
    var schema = mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
    });

    schema.pre('save', function preSaveCallback(next) {
      // user
      var _this = this;

      // only hash the password if it has been modified (or is new)
      if (!_this.isModified('password')) {
        return next();
      }

      // generate a salt
      bcrypt.genSalt(SALT_WORK_FACTOR, function genSaltCallback(err, salt) {
        if (err) {
          return next(err);
        }

        // hash the password along with our new salt
        bcrypt.hash(_this.password, salt, function hashCallback(err, hash) {
          if (err) {
            return next(err);
          }

          // override the cleartext password with the hashed one
          _this.password = hash;
          next();
        });
      });
    });

    schema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
      bcrypt.compare(candidatePassword, this.password, function compareCallback(err, isMatch) {
        if (err) {
          return cb(err);
        }

        cb(null, isMatch);
      });
    };

    return schema;
  }

}

var schema = mongooseConnection.model<IUserModel>("Users", UserSchema.schema);

export = schema;
