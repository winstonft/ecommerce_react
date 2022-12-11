import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';

export const NavBar = ({menus}) => {
  return (
    <div className='navbar'>
      <a href='/' className='navbar__logo'>
        <h1 className='navbar__logo_normal'>Game<span className='navbar__logo_bold'>Store</span></h1>
      </a>
        <div>
          
            {menus.map((menu, index) => {
                return <Link to={menu.href} key={index} className="navbar__menu">{menu.name}</Link>
            })}

        </div>
        <div className='navbar__cart'><CartWidget /></div>
    </div>
  )
}

export default NavBar;