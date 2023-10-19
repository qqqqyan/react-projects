import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [toursList, setToursList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchTours()
  }, [])

  // const fetchTours = async () => {
  //   setLoading(true)
  //   try {
  //     const response = await fetch(url)
  //     const tours = await response.json()
  //     setLoading(false)
  //     setToursList(tours)
  //   } catch (error) {
  //     setLoading(false)
  //     console.log(error)
  //   }
  // }

  const fetchTours = async () => {
    setLoading(true)
    fetch(url)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setToursList(data)
    })
    .catch(err => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
  }
  if (loading) {
    return <Loading/>
  } else {
    return toursList.length 
      ? <Tours toursList={toursList} /> 
      : (
        <main>
          <div className='title'>
            <h2>no tours left</h2>
            <button className='btn' onClick={() => fetchTours()}>
              refresh
            </button>
          </div>
        </main>
      )
  } 
}

export default App
