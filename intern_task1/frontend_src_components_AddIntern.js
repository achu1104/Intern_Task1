import React, { useState } from 'react';
import axios from 'axios';

export default function AddIntern() {
  const [formData, setFormData] = useState({ name: '', email: '', department: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/interns', formData);
    window.location.reload(); // reload to fetch new data
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="department" placeholder="Department" onChange={handleChange} required />
      <button type="submit">Add Intern</button>
    </form>
  );
}
