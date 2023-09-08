import './App.css'
import { BrowserRouter} from 'react-router-dom'
import {RoutesIndex} from '../src/routes/index'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'

function App(){
  return(
    <ErrorBoundary fallback={<ErrorPage/>}>
      <BrowserRouter>
        <Navbar/>
        <RoutesIndex/>
        <Footer/>
      </BrowserRouter>
  </ErrorBoundary>
  )

}

export default App
