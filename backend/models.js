const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean_test_pets', { useNewUrlParser: true });

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A pet is required"],
    minlength: [3, "Name must be at least three characters"]
  },
  type: {
    type: String,
    required: [true, "A type is required"],
    minlength: [3, "Type must be at least three characters"]
  },
  description: {
    type: String,
    required: [true, "A description is required"],
    minlength: [3, "Description must be at least three characters"]
  },
  likes: {
    type: Number,
    default: 0
  },
  skills: [{
    type: String,
    minlength: [3, "Skill must be at least three characters"]
  }],

}, { timestamps: {} })

const Pet = mongoose.model('Pet', PetSchema);

module.exports = { Pet };