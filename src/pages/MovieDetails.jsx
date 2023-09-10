import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {useEffect} from 'react'
import '../styles/MovieDetails.css'
import { throwError } from '../../../throwError'
import { useNavigate } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {HiArrowSmLeft} from 'react-icons/hi'
const MovieDetails = () => {
    const {id} = useParams()
     const [image, setImage] = useState('')
     const [overview, setOverview] = useState('')
     const [title, setTitle] = useState('')
     const [language, setLanguage] = useState('')
     const [rating, setRating] = useState('')
     const  [loading, setLoading] = useState(true)
     const [popularity, setPopularity] = useState('')
     const [release, setRelease] = useState('')
     const [duration, setDuration] = useState('')
     const [genres, setGenres] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${import.meta.env.VITE_BEARER_KEY}`
                }
              };
              
              try{
                fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
                .then(response => {
                    if(response.ok){
                        return response
                    } else{
                        throwError()
                    }
                })
                .then(response => response.json())
                .then((response)=>{
                    setImage(`https://image.tmdb.org/t/p/original${response.poster_path}`)
                    setOverview(response.overview)
                    setTitle(response.original_title)
                    setLanguage(response.original_language)
                    setRating(response.vote_average)
                    setPopularity(response.popularity)
                    setRelease(response.release_date)
                    setDuration(response.runtime)
                    setGenres(response.genres)
                })
                .then(setLoading(false))
              } catch(error){
                    setLoading(false)
                    navigate("/error")
                    console.log(error)
              }
        }, 2000)
    }, [])
  return (
    <>
        {
            loading 
            ? <div className='loader-container'>
                <span className="loader"></span>
            </div> 
            :  <>
                    <NavLink className='back-arrow' onClick={()=>{navigate(-1)}}><HiArrowSmLeft/></NavLink>
                    <div className='movieDetails'>
                    <div className='movieDetails__header'>
                        <div className='movieDetails__poster'
                        style={{backgroundImage: `url(${image})`}}
                        ></div>
                    </div>
    
                    <div className='movieDetails__main'>
                        <div className='main__details'>
                            <h2 className='details__title'>{title}</h2>
                            <h2 className='details__rating'> <AiFillStar className='rating-star'/> {rating}</h2>
                        </div>
                        <p className='main__overview'>{overview}</p>
                        <div className='main__subDetails'>
                            <div className='subDetails-containers'>
                                <div className='subDetails-span-container release-date-container'> <span className='subDetails-span-section'>Release Date:</span> <span className='subDetails-span-info'>{release}</span></div>
                            </div>
                            <div className='subDetails-containers'>
                                <div className='subDetails-span-container'><span className='subDetails-span-section'>Popularity:</span> <span className='subDetails-span-info'>{popularity}</span> </div>
                            </div>
                            <div className='subDetails-containers'>  
                                    <div className='subDetails-span-container'><span className='subDetails-span-section'>Original Language:</span> <span className='subDetails-span-info'>{language}</span>  </div>
                            </div>
                            <div className='subDetails-containers'>  
                                    <div className='subDetails-span-container'><span className='subDetails-span-section'>Runtime:</span><span className='subDetails-span-info'>{duration} min</span> </div>
                            </div>
                            <div className='subDetails-containers'>  
                                    <div className=' genres-container'><span className='subDetails-span-section'>Genres:</span> <div className='subDetails-genres'> {genres.map(genre => <span className='subDetails-span-info genres' key={genre.id}>{genre.name}</span>)}</div> </div>
                            </div>
                        </div>
                    </div>
                </div> 
                </>
            
        }
        </>
  )
}

export default MovieDetails