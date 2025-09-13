import React, { useState } from 'react';

const API_URL = 'http://localhost:3002/contacts';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSubmitted(false), 4000);
      } else {
        console.error("Eroare la trimiterea formularului");
      }
    } catch (error) {
      console.error("Eroare de rețea:", error);
    }
  };

  return (
    <section
      id="contact"
      className="pt-32 pb-6 mb-0 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(to bottom right, #fdf6ee, #f9f3e9)' }}
    >
      <div className="max-w-xl w-full bg-white/90 p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-orange-500">Contact Us</h2>
        <p className="text-gray-700 mb-4 text-center">Have questions? Want to collaborate? Reach out to us!</p>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="name"
            className="w-full p-3 border rounded"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            className="w-full p-3 border rounded"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className="w-full p-3 border rounded"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition w-full sm:w-auto"
          >
            Send
          </button>
        </form>

        {submitted && (
          <p className="text-green-600 mt-4 text-center font-semibold">
            Message sent successfully!
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
