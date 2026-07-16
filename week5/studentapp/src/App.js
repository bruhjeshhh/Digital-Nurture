import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App" style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Student Management Portal</h1>
      <hr />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;