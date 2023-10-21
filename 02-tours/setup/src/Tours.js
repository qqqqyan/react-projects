import React from 'react';
import Tour from './Tour';
const Tours = ({toursList, onDelete}) => {
  return (
    <>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {toursList.map((tour, index) => <Tour key={tour.id} onDelete={() => onDelete(index)} tour={tour}></Tour>)}
      </div>
    </>
  );
};

export default Tours;
