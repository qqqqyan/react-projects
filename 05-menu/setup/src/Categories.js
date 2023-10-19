import React from 'react';

const Categories = ({ categories, onSelect }) => {
  return (
    <>
      {
        categories.map((categorie, index) => (
          <button className='filter-btn' key={index} onClick={onSelect(categorie)}>{categorie}</button>
        ))
      }
    </>

  )
};

export default Categories;
