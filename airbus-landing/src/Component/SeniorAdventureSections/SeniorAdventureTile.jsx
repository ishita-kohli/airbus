import React from 'react';

const SeniorAdventureTile = ({ item }) => {
  const { imgUrl, title, desc } = item;

  return (
    <div className="senior-adventure-tile">
      <img src={imgUrl} alt={title} className="senior-adventure-image" />
      <div className="senior-adventure-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SeniorAdventureTile;
