import React from "react";
import { Banner } from "../components/Banner";
import { Search } from "../components/Search";
import { Pokemons } from "../components/Pokemons";
import { useGlobalContext } from "../context";
import { Loading } from "../components/Loading";
export const Home = () => {
  const {sliderLoad} = useGlobalContext();
  console.log(sliderLoad)
  if (sliderLoad) {
    return <Loading />;
  }
  return (
    <div className="home">
      <Banner />
      <Search />
      <Pokemons />
    </div>
  );
};
