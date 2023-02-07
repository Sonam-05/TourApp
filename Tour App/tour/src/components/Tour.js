import React from 'react'
import './tour.css'
import SingleTour from './SingleTour'

const Tour = ({arr, filterFunc}) => {
  return (
    <div className='Tour'>
      {arr.map((singleObj) => {
        return <SingleTour filterFunc={filterFunc} key={singleObj.id} {...singleObj} />
      })}
    </div>
  )
}

export default Tour
