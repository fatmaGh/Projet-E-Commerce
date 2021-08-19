const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("../model/user_login");

const secretOrKey = process.env.SECRET_OR_KEY;

console.log("1", secretOrKey);

let opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    const { id } = jwt_payload;
    const user = await User.findById(id);
    try {
      user ? done(null, user) : done(null, false);
    } catch (error) {
      console.log(error);
    }
  })
);

module.exports = isAuth = () =>
  passport.authenticate("jwt", { session: false });
