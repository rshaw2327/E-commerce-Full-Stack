const mongoose = require("mongoose");
const validator = require("validator"); //use to validate email address
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcryptjs"); //use to secure passwords and encrypt them

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required. Please enter your name"],
    trim: true,
    minLength: [2, "name should have aleast 2 characters"],
    maxLength: [50, "name cannot exceed 50 characters"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
    validate: [validator.isEmail, "please enter a valid email address"],
    unique: [true, "email already exists"],
  },
  phone_number: {
    type: Number,
    required: [true, " phone number is required"],
    unique: [true, "phone number already exists"], // unique values checks if the email is already stored in the database
  },
  address: [
    {
      flat_number: {
        type: Number,
      },
      postcode: {
        type: Number,
      },
      city: {
        type: String,
      },
    },
  ],
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: [8, "password should atleast have 8 characters"],
  },
  role: {
    type: String,
    enum: ["user", "vendor", "admin"],
    default: "user",
  },
});
// this operates before anything is in the database
userSchema.pre("save", async function (next) {
  // if password is already hashed then do nothing
  if (!this.isModified("password")) {
    next();
  } else {
    this.password = await bcrypt.hash(this.password, 12); //numbers 8-16 8 being low secure and 16 being highest secure
  }
});

// creates a token for the user for the browser
userSchema.methods.getJWTtoken = async function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

// compare the passwords while logging in and passwords saved and hash in database
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// when a user forgets a password we create a token inform of link or OTP

userSchema.methods.getResetPasswordToken = async function () {};

module.exports = mongoose.model("User", userSchema);
