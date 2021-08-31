import React from "react";
import { Banner } from "../components/Banner";
import { Pokemons } from "../components/Pokemons";

export const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Pokemons />
    </div>
  );
};
