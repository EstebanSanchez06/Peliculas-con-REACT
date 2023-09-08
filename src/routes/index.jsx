import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home} from '../pages/Home'
import Navbar from '../Components/Navbar'
import MovieDetails from '../pages/MovieDetails'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import RatingMovies from '../pages/RatingMovies'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<MovieDetails />}/>
        <Route path='/error' element={<ErrorPage />} />
        <Route path='/search/:id' element={<RatingMovies/>} />
    </Routes>
  )
}

export  {RoutesIndex}