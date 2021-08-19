const User = require('../model/user_login')
const express= require('express')
const router = express.Router()
const bcrypt= require('bcrypt')
const jwt = require("jsonwebtoken");

const { registerRules, validator } = require("../middlewares/validator");
const isAuth = require("../middlewares/passport-setup");
const passport = require("passport-jwt");



//Register User 


router.post("/register",registerRules(), validator, async (req,res) =>{
    const user= {...req.body}
    const email = user.email
    const email_exist= await User.findOne({email})
    if(email_exist) return res.status(403).json({msg: "Email already exist"});
    try 
    {
        const newUser = await new User({...user})
        const salt= await bcrypt.genSalt(10)
        const hash_password= await bcrypt.hash(newUser.password,salt)
        newUser.password=hash_password
        newUser.save()
        res.status(201).json({msg: 'User added Successufully'})   
     } 
     catch (error)
     {
        res.status(401).json({msg: 'Failed to add user'})  
     }

})

//Login User
router.post("/login", async(req,res)=>{

   const { email, password } = req.body;

  console.log(email);

  const user = await User.findOne({ email });

  console.log(user);

  if (!user) return res.status(400).json({ msg: "Bad Credentials" });

  console.log(user);

  console.log(password, user.password);

  const isMatch = await bcrypt.compare(password, user.password);

  console.log(isMatch);

  if (!isMatch) return res.status(400).json({ msg: "Bad credentiel" });

  const payload = {
    id: user._id,
    fullName: user.fullName,
    email: user.email
  };

  try {
    const token = await jwt.sign(payload, process.env.SECRET_OR_KEY);

    res
      .status(202)
      .json({ msg: "Login with success", token: `Bearer ${token}` });
  } catch (error) {
    console.error("Login failed", error);
    res.status(400).json({ msg: "Login failed" });
  }
})
//Redirect

router.get("/currentpage", isAuth(), function (req, res) {
  res.json(req.user);
});

//get Users

router.get("/users", (req, res) => {
  User.find()
      .then(users => res.status(200).json(users))
      .catch(err => res.send(err))
})

// Delete users

router.delete("/:_id", (req, res) => {
  let { _id } = req.params
  User.findByIdAndDelete({ _id })
      .then(() => res.send("User has been deleted"))
      .catch(err => res.send(err))
})

router.get("/:fullName", (req, res) => {
  let { fullName } = req.params
  User.find({ fullName })
  .then(search => res.status(200).json(search))
  .catch(err => res.send(err))
})
module.exports=router


