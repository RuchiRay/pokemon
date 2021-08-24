import React from "react";
import { Banner } from "../components/Banner";
import { Search } from "../components/Search";
import { Pokemons } from "../components/Pokemons";
export const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Search />
      <Pokemons />
    </div>
  );
};
