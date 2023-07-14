import Header from './components/Header';
import Home from "./components/Home"
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import Mail from './components/Mail';
import Insta from './components/Insta';
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
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='/app' element={<Home />} />
        </Route>

          {/* About */}
          <Route path='/about' element={<About />} />

          {/* Contact */}
          <Route path='/contact' element={<Contact />}>
              <Route index  element={<Insta/>} />  
              <Route path='insta' element={<Insta/>} />
              <Route path='mail' element={<Mail/>}  />
          </Route>

          {/* Error */}
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
