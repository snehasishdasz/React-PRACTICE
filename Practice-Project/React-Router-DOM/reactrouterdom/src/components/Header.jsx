import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const navLinkStyles = ({isActive}) => {
    return{
      fontWeight: isActive ? 'bold' : 'italic',
      color: isActive ? 'red' : 'white',
      fontSize: "25px"
    }
  }



  return (
    <div className='header'>
    <NavLink style={navLinkStyles} to={'/app'}>Home</NavLink>
    <NavLink style={navLinkStyles} to={'/about'}>About</NavLink>
    <NavLink style={navLinkStyles} to={'/contact'}>Contact</NavLink>
        {/* <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3> */}
    </div>
  )
}

export default Header