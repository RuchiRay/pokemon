import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import "../styles/favourite.css";
export const Favourite = () => {
    const {favList} = useGlobalContext();
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

      </div>
    </div>
  );
};
