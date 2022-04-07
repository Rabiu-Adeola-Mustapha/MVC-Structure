// importing router from express
const {Router} = require("express");
const {userLogin, userRegister} = require("../controllers/users.controller")

//instantiating router 
const usersRouter = Router();


usersRouter.get("/login",userLogin  )

usersRouter.get("/register", userRegister)




// exporting user router to index.js specifically
module.exports = usersRouter;