import React, { useState } from 'react';
import axios from 'axios';
import './AppointmentForm.css'; // ✅ Import CSS

export default function AppointmentForm() {
  const [form, setForm] = useState({ name: '', date: '', time: '', disease: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/appointments', form);
    alert('Appointment Saved!');
    setForm({ name: '', date: '', time: '', disease: '' });
  };

  return (
    <div className="appointment-container">
      <form className="appointment-form" onSubmit={handleSubmit}>
        <h2>Book Your Appointment</h2>
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <input name="time" type="time" value={form.time} onChange={handleChange} required />
        <input name="disease" placeholder="Disease" value={form.disease} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
