// Team.js
import React from 'react';
import Teammate from './Teammate';
import './Teammate.css'

const Team = () => {
  const teammates = [
    { name: 'John Doe', photoUrl: 'john.jpg', linkedinId: 'john-doe-123456' },
    { name: 'Jane Smith', photoUrl: 'jane.jpg', linkedinId: 'jane-smith-789012' },
    // Add more teammates as needed
  ];

  return (
    <div className="team">
      {teammates.map((teammate, index) => (
        <Teammate key={index} {...teammate} />
      ))}
    </div>
  );
};

export default Team;
