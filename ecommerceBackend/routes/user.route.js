const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.route("/getSingleUser/:id").get(getSingleUser);
router.route("/getAllUsers").get(getAllUsers);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/updateUser/:id").put(updateUser);

module.exports = router;
