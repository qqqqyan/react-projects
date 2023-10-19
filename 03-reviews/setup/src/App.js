import React, { useState } from 'react';
import Review from './Review';
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function App() {

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index === people.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const last = () => {
    if (index === 0) {
      setIndex(people.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <main>
      <div className='container'>
        <h2 className='title'>Our Reviews</h2>

        <article className='review'>
          <Review index={index}></Review>
          <button className='prev-btn' onClick={last}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={next}>
            <FaChevronRight />
          </button>
        </article>
      </div>
    </main>


  )
}

export default App;
