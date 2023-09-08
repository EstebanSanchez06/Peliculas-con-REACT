import React from 'react'
import './MovieCard.css'
import { NavLink } from 'react-router-dom'

const MovieCard = ({loading, path, id}) => {
  {
    if(!loading && !id == 0 && path){
      return (
        <div className='movie__poster_container'>
          <NavLink to={`/movie/${id}`} className='card-container movie' style={{
            backgroundImage: `url(${path})`
          }}></NavLink>
        </div>
      )
    }
    else{
      return(
        <div className='card-container skeleton'></div>
      )
    }
  }
}

export default MovieCard