import React, { useState } from 'react'
import './singleTour.css'

const SingleTour = ({id, image, title, cost, para, filterFunc}) => {
    const [readMore, setReadMore] = useState(false);
  return (
    <div className='SingleTour'>
      <section className="imageContainer">
        <img className='tourImage' src={image} alt="image-photo" />
      </section>
      <section className="subHeadingTextContainer">
    <h3 className="tourTitle">{title}</h3>
    <h4 className="tourCost">{cost}</h4>
      </section>
      <hr />
      <section className="infoTextContainer">
        <p className="tourPara">{readMore ? para : `${para.substring(0,80)}...`}
        <span className="readMoreSpan" onClick={() => setReadMore(!readMore)}>{readMore ? 'Read Less' : 'Read More'}</span>
        </p>
       
      </section>
      <button onClick={() => filterFunc(id)} className="notInterested">Not Interested</button>
    </div>
  )
}

export default SingleTour
