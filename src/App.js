import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/login/Login'// Adjust the path as needed
import Register from './pages/register/Register';
import HomePage from './pages/home/Home'

const App = () => {
  // state define

  const storedUsername = localStorage.getItem('username');
  
    return (
    <Router>
     <Routes>
       {/* Other routes */}
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route  path="/" element={<HomePage/>} />
      </Routes>

    </Router>
 
    
  );
};

export default App;
