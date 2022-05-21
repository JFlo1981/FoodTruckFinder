const { Schema } = require('mongoose');

const truckSchema = new Schema({
  owner: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  truckId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = truckSchema;
