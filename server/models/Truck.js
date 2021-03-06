const { Schema, model } = require("mongoose");
const Review = require("./Review");

const truckSchema = new Schema(
  {
    owner: {
      type: String,
    },
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
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

const Truck = model("Truck", truckSchema);

module.exports = Truck;
