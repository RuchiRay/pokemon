import React from "react";
import { Link } from "react-router-dom";

import { ImHeart } from "react-icons/im";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { PokLoad } from "../components/PokLoad";
import "../styles/pokemonlist.css";
export const Pokemons = () => {
  const { pokemonList, pokemonLoad, handleFav, handleNext, handlePrev } = useGlobalContext();
 
    if (pokemonLoad) {
      return <PokLoad />;
    }  
  
  return (
    <div className="pokemon-wrapper">
      <div className="heading-box fill">
            <div className="left fill"></div>
            <h2>Pokemons</h2>
            <div className="right fill"></div>
            </div>
      <div className="page-btn">
        <p className="prev-btn" onClick={() => handlePrev()}>
          <FaArrowAltCircleLeft className="prev" />
          Prev
        </p>

        <p className="next-btn" onClick={() => handleNext()}>
          Next
          <FaArrowAltCircleRight className="next" />
        </p>
      </div>
      <div className="pokemon-center">
        {pokemonList.map((item) => {
          const { ability, bex, h, id, image, nam, w, isFav } = item;
          return (
            <div className="list-pok" key={id}>
              <div className="upper-wrapper">
                <div className="upper">
                  <div className="image">
                  <Link to={`/pokemons/${nam}`}><img src={image} alt="" /></Link>
                  </div>
                  <Link to={`/pokemons/${nam}`} className='name-btn'>{nam}</Link>
      
                  <div className="fav">
                    <p className="fav-btn">Add to favourites</p>
                    <ImHeart
                      className={isFav ? "red heart" : "heart"}
                      onClick={() => handleFav(id)}
                    />
                  </div>
                </div>
              </div>
              <div className="lower">
                <div className="ability">
                  <p>Ability: </p>
                  {ability.map((item, index) => {
                    return (
                      <p key={index} className="ability-btn">
                        {item}
                      </p>
                    );
                  })}
                </div>
                <div className="bex">
                  <p>Base-experience </p>
                  <p className="ability-btn">{bex}</p>
                </div>
                <div className="h-w">
                  <div className="height">
                    <span>Height</span>
                    <p className="ability-btn">{h}</p>
                  </div>
                  <div className="weight">
                    <span>Weight</span>
                    <p className="ability-btn">{w}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="page-btn">
        <p className="prev-btn" onClick={() => handlePrev()}>
          <FaArrowAltCircleLeft className="prev" />
          Prev
        </p>

        <p className="next-btn" onClick={() => handleNext()}>
          Next
          <FaArrowAltCircleRight className="next" />
        </p>
      </div>
    </div>
  );
};
