import IUserModel = require("./../model/interfaces/IUserModel");
import UserSchema = require("./../dataAccess/schemas/UserSchema");
import RepositoryBase = require("./BaseRepository");

class UserRepository extends RepositoryBase<IUserModel> {
  constructor () {
    super(UserSchema);
  }
}

Object.seal(UserRepository);

export = UserRepository;
