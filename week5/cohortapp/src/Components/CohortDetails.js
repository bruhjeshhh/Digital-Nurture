import React from 'react';
import styles from './CohortDetails.module.css'; // Step 8: Import the CSS Module

function CohortDetails({ cohortName, technology, startDate, status }) {
  
  // Step 10: Conditional inline styling based on cohort status
  const headingStyle = {
    color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue',
    marginTop: '0px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '5px'
  };

  return (
    // Step 9: Apply the generated module class to the container div
    <div className={styles.box}>
      <h3 style={headingStyle}>{cohortName}</h3>
      <dl>
        <dt>Technology Stack</dt>
        <dd>{technology}</dd>
        
        <dt>Commencement Date</dt>
        <dd>{startDate}</dd>
        
        <dt>Current Operational Status</dt>
        <dd style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;