import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Tour from './components/Tour'
import data from './components/Data'
import Clear from './components/Clear'

const App = () => {
    const [arr, setArr] = useState(data);
    const filterFunc = (id) => {
        setArr(arr.filter((singleObj) => {
            if(singleObj.id != id){
                return singleObj;
            }
        }))
    }

    const clearAllFunc = () => {
        setArr([])
    }

  return (
    <div className='App'>
      <Header />
      <Tour filterFunc={filterFunc} arr={arr}/>
      {arr.length>0 ? <Clear clearAllFunc={clearAllFunc} /> : <button className='clearAll' onClick={() => setArr(data)}>Reset</button>}
    </div>
  )
}

export default App
