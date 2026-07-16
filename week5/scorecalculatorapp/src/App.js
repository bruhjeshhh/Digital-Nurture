import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', paddingTop: '30px' }}>
      <h1>Student Management Portal: Performance Analyzer</h1>
      <hr style={{ width: '80%' }} />
      {/* Invoking the component with explicit custom values */}
      <CalculateScore 
        Name="Dev Vyawahare" 
        School="Cognizant Deepskilling Academy" 
        Total="186" 
        Goal="200" 
      />
    </div>
  );
}

export default App;