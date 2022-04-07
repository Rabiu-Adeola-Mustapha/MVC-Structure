const {Router} = require("express");
const { greet, welcome } = require("../controllers/index.controller");

const indexRouter = Router();

indexRouter.get("/",welcome);

indexRouter.get("/greet",greet);

module.exports = indexRouter;