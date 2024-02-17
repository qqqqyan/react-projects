import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [index, setIndex] = useState(0);
  let transformClass = ''
  const onPrev = () => {
    if (index === 0) {
      setIndex(data.length - 1)
      transformClass = 'to'
    }
  }
  return (
    <main>
      <button onClick={onPrev}>
        <FiChevronLeft />
      </button>
      <section className={transformClass}>
        <img src={ } />
        <div>{ }</div>
        <div>{ }</div>
        <div>{ }</div>
      </section>
      <button onClick={onNext}>
        <FiChevronRight />
      </button>
    </main>
  )
}

export default App;
