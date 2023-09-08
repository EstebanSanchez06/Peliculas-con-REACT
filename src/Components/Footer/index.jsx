import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <ul className='left'>
            <li>Esteban Sanchez</li>
            <li> <NavLink className={'navlink'} target='_blank' to={"https://github.com/EstebanSanchez06"}>Github</NavLink></li>
            <li><NavLink  className={'navlink'} target='_blank' to={"https://www.instagram.com/esteban.sanchezpassos/"}>Instagram</NavLink></li>
        </ul>
        <ul className='right'>
            <li>@ 2023 Esteban Ignacio Sanchez Passos</li>
        </ul>
    </footer>
  )
}

export default Footer