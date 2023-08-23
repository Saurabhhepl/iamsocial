import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/login/Login'// Adjust the path as needed
import HomePage from './pages/home/Home'

const App = () => {
  // state define
  


  return (
    
      <Routes>
       {/* Other routes */}
        <Route path="/login" component={Login} />
        <Route path="/" component={HomePage} />

      </Routes>
    
  );
};

export default App;
