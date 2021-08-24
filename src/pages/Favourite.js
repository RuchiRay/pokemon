import React from "react";
import { useGlobalContext } from "../context";
import { ImHeart } from "react-icons/im";

import "../styles/favourite.css";
export const Favourite = () => {
  const { favList ,handleFav} = useGlobalContext();
  console.log(favList);
  
  return (
    <div className="favourite-wrapper">
      <div className="fav-banner">
        <div className="heading-box">
          <div className="left"></div>
          <h2>Your Favourites</h2>
          <div className="right"></div>
        </div>
      </div>
      <div className="fav-center">
        {favList.map((item) => {
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
    </div>
  );
};
