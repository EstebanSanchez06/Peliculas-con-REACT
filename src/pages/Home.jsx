import React from 'react'
import '../styles/Home.css'
import { useEffect, useState } from 'react'
import MovieCardsContainer from '../Components/MovieCardsContainer'
import MovieCard from '../Components/MovieCard'
import { throwError } from '../../../throwError'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const [movies, setMovies]= useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])
    const [topMovies, setTopMovies]= useState([18,19,20,21,22,23,24,25,26,27,28])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
          fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=1b9a6c1bddb6d4b599f1848115e0d39b')
          .then(response => {
            if(response.ok){
              console.log('response ok')
              return response
            } else{
              console.log('response not')
              return throwError()

            }
          })
          .then(response => response.json())
          .then(data => data.results)
          .then(movies => setMovies(movies))
          .catch(err =>{
              console.log(err)
              navigate("/error")
          }) 
  
          fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=1b9a6c1bddb6d4b599f1848115e0d39b')
          .then(response => {
            if(response.ok){
              console.log('top source ok')
              return response
            } else{
              return throwError()
            }
          })
          .then(res => res.json())
          .then(data => data.results)
          .then(tops => setTopMovies(tops))
          .catch(err =>{
            console.log(err)
            navigate("/error")
          })
          setLoading(false)
        }
        , 3000)
  },[])
    return (
      <>
                <h2 className='trending-title'>Trending</h2>
                <MovieCardsContainer>
                  {
                    movies.map(movie =>{
                      if(!loading){
                        return <MovieCard
                        key={movie.id}
                        title={movie.original_title}
                        loading={false}
                        path={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        id={movie.id}
                        />  
                      }else{
                        return <MovieCard
                        key={movie+1}
                        loading={true}
                        />
                      }
                      })
                  }
                </MovieCardsContainer>
                
                <h2 className='top-title'>Top Rated</h2>
                <MovieCardsContainer>
                  {
                    topMovies.map(movie =>{
                      if(!loading){
                        return <MovieCard
                        key={movie.id}
                        title={movie.original_title}
                        loading={false}
                        path={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        id={movie.id}
                        />
                      }else{
                        return <MovieCard
                        key={movie}
                        loading={true}
                        />
                      }
                     } )
                  }
                </MovieCardsContainer>

      </>
    )
  
}

export {Home}