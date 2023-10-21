import React, { useState } from 'react';

const Tour = ({tour, onDelete}) => {
  const { id, image, info, name, price } = tour;
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <button className="delete-btn" onClick={() => onDelete()}>
          not interested
        </button>
      </footer>
    </article>
  )
}
export default Tour;
