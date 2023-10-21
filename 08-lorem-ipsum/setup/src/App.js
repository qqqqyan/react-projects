import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  let showTexts = []
  const onSubmit = (e) => {
    e.preventDefault();
    showTexts = data.slice(0, count)
    console.log(showTexts);
  }
  return (
    <section className='section-center'>
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className='lorem-form' onSubmit={onSubmit}>
        <label htmlFor='count'>
          Paragraphs:
        </label>
        <input id='count' type="number" value={count} onChange={(e) => setCount(e.target.value)} />
        <button type='submit' className='btn'>GENERATE</button>
      </form>
      <article className='lorem-text'>
        {showTexts && showTexts.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </article>
    </section>

  )
}

export default App;
