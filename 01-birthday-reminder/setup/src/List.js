import React from 'react';

const List = ({ data }) => {
  return (
    <>
      {data.map(item => (
        <div className='person' key={item.id}>
          <img src={item.image} alt={`${item.name}'s avatar`}/>
          <div>
            <h4>{item.name}</h4>
            <p>{item.age} years</p>
          </div>
        </div>) 
      )}
    </>
  )
};

export default List;
