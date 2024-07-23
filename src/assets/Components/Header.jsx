import React from 'react'
import { useState } from 'react';
import { useTheme } from '../Context/ThemeContext';
import { ThemeContext } from '../Context/ThemeContext';
import Earth from './Earth';
import { useLoader } from '@react-three/fiber';
import img from '../images/sun.jpg'
import img2 from '../images/moon.jpg'
import { Link, NavLink } from 'react-router-dom';
import { TextureLoader } from 'three';
function Header() {
 const [menuOpen,setMenuOpen]=useState(false);
 const {DarkTheme,toggleTheme,values}=useTheme(ThemeContext);
 function toggleMenu(){
    setMenuOpen(!menuOpen);
 }
 const texture=useLoader(TextureLoader,img)
 const texture2=useLoader(TextureLoader,img2);

  return (
   <section>
    <header>
      <nav>
        <h1 style={values('','','#adc0f7','#072F60')}>Al Hussnain Academy</h1>
        <div className='earth' onClick={toggleTheme}>
          {DarkTheme? <Earth texture={texture2} metalness={2} roughness={30}/>:
          <Earth texture={texture} metalness={2} roughness={30}/>}
          </div>
          <i className={`fa-solid fa-bars menu-bar ${menuOpen ? 'hide' :'show'}`} style={values('','','#adc0f7','#072F60')} onClick={toggleMenu}></i>
        <div className={`nav-content  ${menuOpen ? 'nav-show' :'nav-hide'}`}  style={values('','','#adc0f7','#072F60')}>
          <i className='fa-solid fa-xmark x-mark' onClick={toggleMenu}></i>
          <NavLink to='/Home' className={({isActive})=>isActive? 'Header-links-active' : 'Header-links'} style={values('','','#adc0f7','#072F60')} >Home</NavLink>
          <NavLink to='/Courses' className='Header-links' style={values('','','#adc0f7','#072F60')}>Courses</NavLink>
          <NavLink to='/About'  className='Header-links' style={values('','','#adc0f7','#072F60')}>About</NavLink>
          <NavLink to='/Contact'  className='Header-links' style={values('','','#adc0f7','#072F60')}>Contact</NavLink>
          <span className='nav-earth' onClick={toggleTheme}>
          {DarkTheme? <Earth texture={texture2} metalness={2} roughness={30}/>:
          <Earth texture={texture} metalness={2} roughness={30}/>}
          </span>
          
        </div>
      </nav>
    </header>
   </section>
  )
}

export default Header