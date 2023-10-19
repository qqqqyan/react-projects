import React from 'react';
import Tour from './Tour';
const Tours = (toursList) => {
  return (
    <>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {toursList.map(tour => <Tour tour={tour}></Tour>)}
      </div>
    </>
  );
};

export default Tours;
