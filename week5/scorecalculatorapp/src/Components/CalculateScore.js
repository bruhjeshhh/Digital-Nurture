import React from 'react';
import '../Stylesheets/mystyle.css';

// Functional component accepting destructuring props fields
function CalculateScore({ Name, School, Total, Goal }) {
  // Convert text data safely into numbers for math tracking
  const numericTotal = Number(Total);
  const numericGoal = Number(Goal);
  
  // Calculate average out of 2 primary target domains
  const average = (numericTotal / 2).toFixed(2);

  return (
    <div className="scorecard">
      <h2>Student Assessment Details</h2>
      <div className="score-details">
        <p><strong>Student Name:</strong> {Name}</p>
        <p><strong>School Name:</strong> {School}</p>
        <p><strong>Total Marks:</strong> {Total}</p>
        <p><strong>Target Goal Marks:</strong> {Goal}</p>
        <p><strong>Calculated Average Score:</strong> <span className="emphasized">{average}</span></p>
      </div>
    </div>
  );
}

export default CalculateScore;