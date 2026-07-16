import React from 'react';
import './App.css';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <header style={{ backgroundColor: '#2c3e50', padding: '20px', color: 'white', textAlign: 'center' }}>
        <h1>Enterprise Live Blog Portal</h1>
      </header>
      <main>
        <Posts />
      </main>
    </div>
  );
}

export default App;