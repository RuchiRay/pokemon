import React from "react";
// import { HiSparkles } from 'react-icons/hi'
// import { ImHeart,ImPower } from 'react-icons/im'
import { ImHeart } from "react-icons/im";
// import { GiBodyHeight } from 'react-icons/gi'
// import { FaWeight } from 'react-icons/fa'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useGlobalContext } from "../context";
import "../styles/pokemonlist.css";
export const Pokemons = () => {
  const { pokemonList, mainList,handleFav, handleNext, handlePrev } = useGlobalContext();
  
  return (
    <div className="pokemon-wrapper">
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
                    <img src={image} alt="" />
                  </div>
                  <button className="name-btn">{nam}</button>
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
                  <p>Ability </p>
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
