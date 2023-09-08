import {useState} from 'react'
import './Navbar.css'
import {RiMovie2Line} from 'react-icons/ri'
import {BiSearch} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [search, setSearch]= useState('')
    const navigate = useNavigate()
    const enter = (event)=>{
      if(event.key == 'Enter'){
        navigate(`search/${search}`)
        window.location.reload()
      }
    }
  return (
    <nav className='nav'>
         <NavLink className='nav-icon' to={'/'}><RiMovie2Line style=
         {{
         fontSize: '60px',
         color: '#0D1B2A'
        }}/></NavLink>
        
        <div className='input-container'>
          <input
          type='text'
          className='navbar-input'
          placeholder='Seach Movie'
          onChange={(event)=>{
            setSearch(event.target.value)
          }}
          onKeyDown={enter}
          />
          <NavLink className='nav-link' onClick={()=>{
                    navigate(`search/${search}`)
                    window.location.reload()
          }} ><BiSearch style={
            {
              fontSize: '30px',
              color: '#0D1B2A',
              cursor: 'pointer'
            }
          }/></NavLink>
        </div>
    </nav>
  )
}

export default Navbar