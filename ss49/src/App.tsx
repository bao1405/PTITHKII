import React from 'react'
import {Routes, Route,Link} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Notfound from './components/Notfound';
import Navbar from './components/Navbar';

export default function App() {
  return (
    
    <div className="App">
      <header>
        <Link to="/navbar">Nav</Link>
        <Link to="/">Home</Link>
        <Link  to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/notfound">NotFoud</Link>
      </header>
      <Routes>
        <Route path='/navbar' element={<Navbar/>}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/notfound" element={<Notfound/>} />
      </Routes>
    </div>
  )
}