import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(form));
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
  <label>Name</label>
  <input
    required
    type="text"
    placeholder="Enter your name"
    onChange={(e) => setForm({ ...form, name: e.target.value })}
  />
</div>

<div className="form-group">
  <label>Gmail</label>
  <input
    required
    type="email"
    placeholder="Enter your Gmail"
    onChange={(e) => setForm({ ...form, email: e.target.value })}
  />
</div>

<div className="form-group">
  <label>Password</label>
  <input
    required
    type="password"
    placeholder="Enter your password"
    onChange={(e) => setForm({ ...form, password: e.target.value })}
  />
</div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
