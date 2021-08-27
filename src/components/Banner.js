import React from 'react'
import { Slider } from './Slider'
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { Loading } from "../components/Loading";

import '../styles/banner.css'
export const Banner = () => {
    const {sliderLoad} = useGlobalContext(); 
    if (sliderLoad) {
      return <Loading />;
    }  
    return (
        <div className='banner'>
            <h1 className="banner-heading">Welcome to the Pokemon Library</h1>
            <div className="navbar">
                <ul className="nav-links">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/favourite'>Favourites</Link></li>
                  
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
