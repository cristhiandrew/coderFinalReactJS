import React from 'react'
import brand from '../assets/img/brand.png'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"><img src={brand} alt="" /></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/productos">Productos</Link></li>
                <li><Link className="menu-link" to="/productos/mangas">Mangas</Link></li>
                <li><Link className="menu-link" to="/productos/remeras">Remeras</Link></li>
                <li><Link className="menu-link" to="/productos/figuras">Figuras</Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default NavBar