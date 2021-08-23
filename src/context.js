import React, { useReducer, useContext, useEffect, useState } from "react";
import { Reducer } from "./Reducer";

const urlFeauture = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=6";
const urlList = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
const AppContext = React.createContext();
const initialState = {
  featured: [],
  pokemonList: [],
  favList: [],
  sliderLoad: true,
  pokemonLoad: false,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [term, setTerm] = useState("");
  let count = 0;
  //getting the data for every url
  const getSingle = async (link) => {
    const singleResponse = await fetch(link);
    const dataSingle = await singleResponse.json();
    count++;
    let { abilities, base_experience, height, id, name, sprites, weight } =
      dataSingle;
    let ability = abilities.map((item) => {
      return item.ability.name;
    });

    let pokImage = sprites.other.dream_world.front_default;
    let singlePok = {
      ability: ability,
      bex: base_experience,
      h: height,
      id: id,
      nam: name,
      image: pokImage,
      w: weight,
      isFav: false,
    };
    dispatch({ type: "ADD POKEMON", payLoad: singlePok });
    if (count === 6) {
      dispatch({ type: "SETSLIDERLOAD FALSE" });
    }
  };

  // getting the urls for slider
  // getting the url for pokemon list display

  useEffect(() => {
    const getFeatured = async () => {
      dispatch({ type: "SETSLIDERLOAD TRUE" });
      const response = await fetch(urlFeauture);
      const data = await response.json();
      const { results } = data;

      results.map((result) => {
        const { url } = result;
        getSingle(url);
        return result;
      });
    };
    getFeatured();

    // const getList = async () => {
    //   dispatch({ type: "SETPOKEMONLOAD TRUE" });
    //   const resList = await fetch(urlList);
    //   const listData = await resList.json();
    //   console.log(listData);
    // };
    
  }, []);

  const handleFav = (id) => {
    const favId = id;
    // hum pokemon wali list se search karke fav mein daal denge
    // pokemon list wali array mein map karnege or jo id match karega uska isfav toggle kar denge or slider or neeche wali pokemon list ka alag function hoga but same
    dispatch({ type: "TOGGLE FAV", payLoad: favId });
  };

  return (
    <AppContext.Provider value={{ ...state, handleFav }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
