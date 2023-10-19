import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = ({ index }) => {
  const peopleShow = people[index]

  const { name, job, image, text } = peopleShow;
  return (
    <>
      <div className='img-container'>
        <img className='person-img' src={image} />
      </div>
      <div>{name}</div>
      <div>{job}</div>
      <div className='info'>{text}</div>
    </>
  )
};

export default Review;
