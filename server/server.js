const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Appointment = require('./models/Appointment');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.post('/api/appointments', async (req, res) => {
  try {
    const newApp = new Appointment(req.body);
    await newApp.save();
    res.status(201).json(newApp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/appointments', async (req, res) => {
  try {
    const apps = await Appointment.find();
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
