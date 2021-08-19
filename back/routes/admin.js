const Admin = require('../model/admin')
const express= require('express')
const router = express.Router()
const bcrypt= require('bcrypt')
const jwt = require("jsonwebtoken");

const { registerRules, validator } = require("../middlewares/validator");
const isAuth = require("../middlewares/passport-setup");
const passport = require("passport-jwt");



router.post("/register",registerRules(), validator, async (req,res) =>{
  const admin= {...req.body}
  const email = admin.email
  const email_exist= await Admin.findOne({email})
  if(email_exist) return res.status(403).json({msg: "Email already exist"});
  try 
  {
      const newAdmin = await new Admin({...admin})
      const salt= await bcrypt.genSalt(10)
      const hash_password= await bcrypt.hash(newAdmin.password,salt)
      newAdmin.password=hash_password
      newAdmin.save()
      res.status(201).json({msg: 'Admin added Successufully'})   
   } 
   catch (error)
   {
      res.status(401).json({msg: 'Failed to add Admin'})  
   }

})


router.post("/login", async(req,res)=>{
   const { email, password } = req.body;
   console.log(email);
   const admin = await Admin.findOne({ email });
   if (!admin) return res.status(400).json({ msg: "Bad Credentials" });
   const payload = {
     id: admin._id,
     email: admin.email
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


 router.get("/currentpage", isAuth(), function (req, res) {
  res.json(req.user);
});


 module.exports=router