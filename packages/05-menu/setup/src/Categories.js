import React from 'react';

const Categories = ({ categories, onSelect }) => {
  const onClickBtn = () => {
    // onSelect(categorie)
    console.log('click');
  }
  return (
    <>
      {
        categories.map((categorie, index) => (
          <button className='filter-btn' key={index} onClick={onClickBtn}>{categorie}</button>
        ))
      }
    </>

  )
};

export default Categories;
