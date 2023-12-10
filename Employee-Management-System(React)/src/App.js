import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/navbar';
import Dashboard from './Pages/dashboard';
import Home from './Pages/home';
import AddUser from './Pages/AddUser';
import Update from './Pages/update';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addusers" element={<AddUser />} />   
          <Route path="/update/:id" element={<Update />} />          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
