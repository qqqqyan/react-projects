import React from 'react';

const Menu = ({ menu }) => {
  const { title, img, desc, price } = menu;
  return (
    <div className='menu-item'>
      <img className='photo' src={img} />
      <div className='item-info'>
        <header>
          <h4>{title}</h4>
          <div className='price'>{price}</div>
        </header>
        <div className='item-text'>{desc}</div>
      </div>
    </div>
  )
};

export default Menu;
