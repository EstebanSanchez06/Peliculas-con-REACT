import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import { throwError } from '../../../throwError'
import '../styles/RatingMovies.css'
import MovieCard from '../Components/MovieCard'
import {HiArrowSmLeft} from 'react-icons/hi'
const RatingMovies = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [movies, setMovies] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
    const [loading, setLoading] = useState(true)

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjlhNmMxYmRkYjZkNGI1OTlmMTg0ODExNWUwZDM5YiIsInN1YiI6IjY0ODBjYzRmOTkyNTljMDBhY2NhYzExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yYgkMp79aIo7HUcwuBnWh1x2TR8o_OCS8D5Hob5mx5o'
        }
      };
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(true)
              try{
                fetch(`https://api.themoviedb.org/3/search/movie?query=${id}&include_adult=false&language=en-US&page=1`, options)
                    .then(response => {
                        if (response.ok){
                            return response
                        } else{
                            throwError()
                        }
                    })
                    .then(response => response.json())
                    .then(data => data.results)
                    .then(movies => {
                    setMovies(movies)
                })
              } catch{
                    setLoading(false)
                    navigate("/error")
              } setLoading(false)
        }, 2000)
    }, [])
  return (
        <>
            {
                loading ?
                <div className='grid-container'>
                    {
                        movies.map(movie =>{
                            return <MovieCard 
                                key={movie}
                                loading={true}
                            />
                        })
                    }
                </div>
                : 
                <>
                <NavLink className='back-arrow' onClick={()=>{navigate(-1)}}><HiArrowSmLeft/></NavLink>
                <div className='grid-container'>
                    {
                        movies.map(movie =>{
                            return <MovieCard 
                                key={movie.id}
                                loading={false}
                                path={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                id={movie.id}
                            />
                        })
                    }
                </div>
                    </>
            }
        </>
  )
}

export default RatingMovies