import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem('user'));

  const handleLogin = (e) => {
    e.preventDefault();
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
  <h2>Login</h2>
  <form onSubmit={handleLogin}>
    <div className="form-group">
      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <div className="form-group">
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    <button type="submit">Login</button>
  </form>
</div>

  );
};

export default Login;
