import React from 'react'
import './clear.css'

const Clear = ({clearAllFunc}) => {
  return (
    <div className='Clear'>
      <button onClick={clearAllFunc} className="clearAll">Clear All</button>
    </div>
  )
}

export default Clear
