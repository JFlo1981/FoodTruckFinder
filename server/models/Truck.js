const { Schema, model } = require("mongoose");

const truckSchema = new Schema({
  owner: [
    {
      type: String,
    },
    // associate by unique identifier (username or email)
  ],
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  truckName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  hours: {
    type: String,
    required: true,
  },
  menu: {
    type: String,
  },
});

const Truck = model("Truck", truckSchema);

module.exports = Truck;
