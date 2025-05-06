const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: String,
  date: String,
  time: String,
  disease: String,
});

module.exports = mongoose.model('Appointment', appointmentSchema);
