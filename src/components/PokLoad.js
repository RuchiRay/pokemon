import React from "react";
import { CircleLoader } from "react-awesome-loaders";
import "../styles/pokLoad.css";

export const PokLoad = () => {
  return (
    <div className='pokLoad'>
      
       <CircleLoader
        meshColor={"#9A0F9A"}
        lightColor={"#E0E7FF"}
        duration={1.5}
        desktopSize={"90px"}
        mobileSize={"64px"}
      />
    </div>
  );
};
