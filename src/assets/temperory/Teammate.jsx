// Teammate.js
import React from 'react';

const Teammate = ({ name, photoUrl, linkedinId }) => {
  return (
    <div className="teammate">
      <img src={photoUrl} alt={name} />
      <h2>{name}</h2>
      <a href={`https://www.linkedin.com/in/${linkedinId}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  );
};

export default Teammate;
