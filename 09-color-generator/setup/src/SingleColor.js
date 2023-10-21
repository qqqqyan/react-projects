import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight }) => {
  const [alert, setAlert] = useState(false)
  const hex = rgbToHex(...rgb)
  const handleClickPanel = () => {
    if (alert) {
      return
    }
    navigator.clipboard.writeText(hex)
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 3000)
  }
  return (
    <div className='color' style={{ background: `${hex}` }} onClick={handleClickPanel}>
      <div>{weight}</div>
      <div>{hex}</div>
      {alert && <div>copied!</div>}
    </div>
  )
}

export default SingleColor
