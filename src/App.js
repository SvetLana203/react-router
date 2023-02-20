import About from './About';
import Home from './Home';
import Shop from "./Shop";
import Team from './Team';
import Contact from "./Contact";
import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return <Router>
    <nav>
      <Link to="/" className='link'>First Page</Link>
      <Link to="/about" className='link'>About</Link>
      <Link to="/home" className='link'>Home</Link>
      <Link to="/shop" className='link'>Shop</Link>
      <Link to="/team" className='link'>Team</Link>
      <Link to="/contact" className='link'>Contact</Link>
    </nav>

    <Routes>
      <Route path="about" element={<About/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="team" element={<Team/>}/>
      <Route path="contact" element={<Contact />}/>
    </Routes>
  </Router>
}

export default App;
