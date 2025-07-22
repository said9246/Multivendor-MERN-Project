const express=require("express")
const router=express.Router()

const { test, SignUP, SignIn, GetUserData, Logout } = require("../controller/user");
const { isAuthenticated } = require("../middleware/auth");


router.get("/test", test)
router.post("/sign-up", SignUP);
router.post("/sign-in", SignIn)
router.get("/userdata", isAuthenticated, GetUserData)
router.get("/logout", Logout)



module.exports=router