import React from 'react'
import AppText from "../AppText/AppText"

import "./Cards.css"

const Cards = ({ title, amount, textStyle }) => {
  return (
    <div className='card'>
      <AppText header name={title} style={textStyle} />
      <AppText name={amount} large />
    </div>
  )
}

export default Cards;