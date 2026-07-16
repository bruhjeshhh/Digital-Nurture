import React from 'react';
import './App.css';
import CohortDetails from './Components/CohortDetails';

function App() {
  // Mock data representing your current training pipelines
  const academyCohorts = [
    { id: 1, name: 'FSE Java Track Alpha', tech: 'Spring Boot, React & DevOps', date: 'June 01, 2026', status: 'ongoing' },
    { id: 2, name: 'FSE DotNet Batch 04', tech: 'ASP.NET Core & Angular', date: 'May 15, 2026', status: 'completed' },
    { id: 3, name: 'Python Automation Beta', tech: 'FastAPI, PyTest & Selenium', date: 'July 10, 2026', status: 'ongoing' }
  ];

  return (
    <div className="App" style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2c3e50', textAlign: 'center' }}>Cognizant Academy Cohort Dashboard</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>Internal Deepskilling Management System Terminal</p>
      <hr style={{ width: '90%', marginBottom: '30px' }} />
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {academyCohorts.map(cohort => (
          <CohortDetails 
            key={cohort.id}
            cohortName={cohort.name}
            technology={cohort.tech}
            startDate={cohort.date}
            status={cohort.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;