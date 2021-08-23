import React from 'react'
import { Slider } from './Slider'
import { Link } from "react-router-dom";

import '../styles/banner.css'
export const Banner = () => {
    return (
        <div className='banner'>
            <h1 className="banner-heading">Welcome to the Pokemon Library</h1>
            <div className="navbar">
                <ul className="nav-links">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/favourite'>Favourites</Link></li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                </ul>
            </div>
            <div className="heading-box">
            <div className="left"></div>
            <h2>Featured Pokemons</h2>
            <div className="right"></div>
            </div>
            <Slider/>
        </div>
    )
}
