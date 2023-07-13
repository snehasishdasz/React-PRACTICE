import Header from './components/Header';
import Home from "./components/Home"
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import './App.css';
import React from 'react';
import{ BrowserRouter as Router, Routes, Route }from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>

        {/* HOME */}
          <Route path='/app' element={<Home />} />

          {/* About */}
          <Route path='/about' element={<About />} />

          {/* Contact */}
          <Route path='/contact' element={<Contact />}>
          
          </Route>

          {/* Error */}
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
