import React, { useState } from 'react'
import SingleColor from './SingleColor'


import Values from 'values.js'

function App() {
  const [hex, setHex] = useState('#f15025')
  const [panels, setPanels] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = new Values(`${hex}`).all(10)
    setPanels(values)
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
        {panels.map((panel, index) => {
          return <SingleColor key={index} {...panel} />
        })}
      </section>
    </main>
  )
}

export default App
