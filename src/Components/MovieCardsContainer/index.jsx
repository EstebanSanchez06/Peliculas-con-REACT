import React from 'react'
import './MovieCardsContainer.css'
const MovieCardsContainer = ({children}) => {
  return (
    <div className='cards-container'>{children}</div>
  )
}

export default MovieCardsContainer