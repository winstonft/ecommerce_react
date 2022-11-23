import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = () => {
    const menus = ['Inicio', 'Tienda', 'Contacto']
  return (
    <div className='navbar'>
      <a href='/' className='navbar__logo'>
        <h1 className='navbar__logo_normal'>Game<span className='navbar__logo_bold'>Store</span></h1>
      </a>
        <div>
          
            {menus.map((menu, index) => {
                return <a href='/' key={index} className="navbar__menu">{menu}</a>
            })}
        </div>
        <div className='navbar__cart'><CartWidget /></div>
    </div>
  )
}

export default NavBar;