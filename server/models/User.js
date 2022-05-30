const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// import schema from Truck.js
const truckSchema = require("./Truck");
const Review = require("./Review");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    isOwner: {
      type: Boolean,
      default: false,
      required: true,
    },
    savedTrucks: [{ type: Schema.Types.ObjectId, ref: "Truck" }],
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("truckCount").get(function () {
  return this.savedTrucks.length;
});

const User = model("User", userSchema);

module.exports = User;
