import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div>
      <h1>Welcome {user?.name || 'Guest'} to the Dashboard</h1>
      <button className="btn-signout" onClick={handleSignOut}>
  Signout
</button>

    </div>
  );
};

export default Dashboard;
