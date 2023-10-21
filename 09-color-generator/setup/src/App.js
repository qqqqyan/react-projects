import React, { useState } from 'react'
import SingleColor from './SingleColor'

import rgbToHex from './utils'

import Values from 'values.js'

function App() {
  const [hex, setHex] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    //new Values('#f15025').all(10)
  }
  return (
    <main>
      <header>
        <h2>color generator</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' value={hex} onChange={(e) => setHex(e.target.value)} placeholder='format: #f15025' />
          <button type='submit'>submit</button>
        </form>
      </header>
      <section>
        <SingleColor />
      </section>
    </main>
  )
}

export default App
