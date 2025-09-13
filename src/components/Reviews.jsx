import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3002/reviews';

const Reviews = () => {
  const fixedReviews = [
    { id: 1, name: 'Jessica', text: 'My hair looked flawless for my event!' },
    { id: 2, name: 'Chloe', text: 'The makeup artist was amazing—she made me feel so confident!' },
  ];

  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: '', text: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error("Eroare la încărcarea review-urilor:", err);
      }
    };

    fetchReviews();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      try {
        const response = await fetch(`${API_URL}/${editId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, id: editId }),
        });

        const updatedReview = await response.json();
        setReviews(reviews.map(r => r.id === editId ? updatedReview : r));
        setEditId(null);
      } catch (error) {
        console.error("Eroare la editarea recenziei:", error);
      }
    } else {

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const addedReview = await response.json();
        setReviews([...reviews, addedReview]);
      } catch (error) {
        console.error("Eroare la trimiterea recenziei:", error);
      }
    }

    setFormData({ name: '', text: '' });
  };

  const handleEdit = (review) => {
    setEditId(review.id);
    setFormData({ name: review.name, text: review.text });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        setReviews(reviews.filter(r => r.id !== id));
      } catch (error) {
        console.error("Eroare la ștergerea recenziei:", error);
      }
    }
  };

  return (
    <section className='bg-white/80 p-10 rounded-lg shadow-lg mt-12'>
      <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
        Clients Reviews
      </h2>

      {}
      <div className='grid md:grid-cols-2 gap-8 mb-10'>
        {fixedReviews.map(review => (
          <div key={review.id} className='bg-gray-100 p-6 rounded-xl shadow-md'>
            <p className='italic text-gray-600 mb-4'>"{review.text}"</p>
            <p className='font-semibold text-gray-800'>- {review.name}</p>
          </div>
        ))}
      </div>

      {}
      <form onSubmit={handleSubmit} className='space-y-4 max-w-xl mx-auto mb-10'>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className='w-full p-2 border border-gray-300 rounded'
        />
        <textarea
          name="text"
          placeholder="Your Review"
          value={formData.text}
          onChange={handleChange}
          rows={3}
          required
          className='w-full p-2 border border-gray-300 rounded'
        />
        <button
          type="submit"
          className='bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition'
        >
          {editId ? 'Update Review' : 'Submit Review'}
        </button>
      </form>

      {}
      <div className='grid md:grid-cols-2 gap-8'>
        {reviews.map((review) => (
          <div key={review.id} className='bg-gray-100 p-6 rounded-xl shadow-md'>
            <p className='italic text-gray-600 mb-4'>"{review.text}"</p>
            <p className='font-semibold text-gray-800'>- {review.name}</p>
            <div className='flex gap-2 mt-2'>
              <button
                onClick={() => handleEdit(review)}
                className='text-sm bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500'
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(review.id)}
                className='text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
