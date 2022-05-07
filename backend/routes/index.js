const express = require("express");
const router = express.Router();

const questionRouter = require("./Question");
const answerRouter = require("./Answer");
const registerRouter = require("./register");
const loginRouter = require("./login");
const checkAuth = require("../middleware/checkAuth")



router.get("/", (req, res) => {
  res.send("This api is reserved for AgriQna");
});

router.use("/questions", checkAuth, questionRouter);
router.use("/answers", checkAuth, answerRouter);
router.use("/register", registerRouter);
router.use("/login", loginRouter);
module.exports = router; 
