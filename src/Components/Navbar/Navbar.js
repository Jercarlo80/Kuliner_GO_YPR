import React, {useState} from 'react';

import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import '../Navbar/Navbar.css';
import Logo from '../../Pictures/logo.png'


const Navbar = () => {
  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click)



  return (
    <div className='navbar'>
      <Link to='/'><img src={Logo} alt=''/></Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link className="home" to="/Home">Home</Link>
        </li>
        <li>
          <Link className="favorite" to="/Favorite">Favorite</Link>
        </li>
        <li>
          <Link className="terdekatku" to="/Terdekatku">Terdekatku</Link>
        </li>
        <li>
          <Link className="popular" to="/Popular">Popular</Link>
        </li>
        <li>
          <button className='masuk'>
            Masuk
          </button>
        </li>
        <li>
          <button className='daftar'>
            Daftar
          </button>
        </li>
      </ul>

      <div className='icon' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#FFF'}} />) : (<FaBars size={20} style={{color: '#FFFF'}}/>)}
      </div>
    </div>
  )
}

export default Navbar

