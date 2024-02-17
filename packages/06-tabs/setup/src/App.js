import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [tabIndex, setTabIndex] = useState(0)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setJobs(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div>Loading</div>
    )
  }

  const job = jobs[tabIndex]
  const { company, dates, duties, title } = job

  return (
    <main className='section'>
      <header className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </header>
      <nav>
        <div className='btn-container'>
          {jobs.map((item, index) => (
            <button
              className={`job-btn ${tabIndex === index ? 'active-btn' : ''}`}
              key={item.id}
              onClick={() => setTabIndex(index)}
            > {item.company} </button>
          ))}
        </div>
      </nav >

      <section className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <div className='job-date'>{dates}</div>
        {duties.map((duty, index) => (
          <div key={index}>{duty}</div>
        ))}
      </section>
    </main >
  )
}

export default App
