import React, { useState, useEffect } from 'react';
import { ArtistsList } from './Artists';
import backgroundPhoto from '../assets/backgroundphoto.jpg';

const API_URL = 'http://localhost:3002/appointments';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    artist: '',
    service: '',
    date: '',
    time: '',
  });
  const [message, setMessage] = useState('');
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setAppointments(data))
      .catch(err => console.error('Error fetching appointments:', err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(newAppointment => {
        setAppointments([...appointments, newAppointment]);
        setMessage('Appointment booked successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          artist: '',
          service: '',
          date: '',
          time: '',
        });
        setTimeout(() => setMessage(''), 3000);
      })
      .catch(err => {
        console.error('Error saving appointment:', err);
        setMessage('Error booking appointment.');
      });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to cancel this appointment?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setAppointments(prev => prev.filter(app => app.id !== id));
        setMessage("Appointment canceled.");
        setTimeout(() => setMessage(''), 3000);
      } else {
        console.error("Error deleting appointment");
        setMessage("Error canceling appointment.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setMessage("Network error.");
    }
  };

  return (
    <section
      id="appointment"
      className="pt-32 min-h-screen flex flex-col items-center"
      style={{
        backgroundImage: `url(${backgroundPhoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white/70 rounded shadow space-y-4 backdrop-blur-sm"
      >
        <h2 className="text-orange-600 text-xl font-bold text-center mb-4">
          Book Your Appointment
        </h2>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <select
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select Artist</option>
          {ArtistsList.map((artist, idx) => (
            <option key={idx} value={artist.name}>
              {artist.name} - {artist.specialization}
            </option>
          ))}
        </select>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select Service</option>
          <option value="Haircut and Styling">Haircut and Styling</option>
          <option value="Makeup Application">Makeup Application</option>
          <option value="Facial Treatments">Facial Treatments</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition"
        >
          Submit
        </button>

        {message && (
          <p className="text-green-600 text-center mt-4 font-semibold">
            {message}
          </p>
        )}
      </form>

      {}
      {appointments.length > 0 && (
        <div className="mt-10 w-full max-w-md bg-white/70 p-4 rounded shadow-lg">
          <h3 className="text-lg font-bold mb-4 text-orange-600 text-center">Your Appointments</h3>
          <ul className="space-y-3">
            {appointments.map(app => (
              <li key={app.id} className="border p-3 rounded flex justify-between items-center">
                <div>
                  <p><strong>Name:</strong> {app.firstName} {app.lastName}</p>
                  <p><strong>Date:</strong> {app.date} at {app.time}</p>
                  <p><strong>Artist:</strong> {app.artist} | <strong>Service:</strong> {app.service}</p>
                </div>
                <button
                  onClick={() => handleDelete(app.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Cancel
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default AppointmentForm;
