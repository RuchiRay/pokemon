import React, { useReducer, useContext, useEffect, useState } from "react";
import { Reducer } from "./Reducer";


const urlFeauture = "https://pokeapi.co/api/v2/pokemon/?offset=34&limit=6";
const AppContext = React.createContext();
const initialState = {
  featured: [],
  pokemonList: [],
  favList: [],
  sliderLoad: true,
  pokemonLoad: false,
  mainList: [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const { featured, pokemonList, favList, sliderLoad, pokemonLoad, mainList } =
    state;

  const [urlList, setUrlList] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=400&limit=15"
  );
  let page = "";
  // getting the urls for slider
  // getting the url for pokemon list display
  useEffect(() => {
    let slidercount = 0;
    let listcount = 0;
    const getFeatured = async () => {
      dispatch({ type: "SETSLIDERLOAD TRUE" });
      const response = await fetch(urlFeauture);
      const data = await response.json();
      const { results } = data;

      results.map((result) => {
        const { url } = result;
        getSingle(url, "slider");
        return result;
      });
    };
    if (listcount === 0) {
      dispatch({ type: "EMPTY FEATURED" });

      getFeatured();
    }

    const getList = async () => {
      dispatch({ type: "SETPOKEMONLOAD TRUE" });
      const resList = await fetch(urlList);
      const listData = await resList.json();
      const { results } = listData;
      results.map((result) => {
        const { url } = result;
        getSingle(url, "list");
        return result;
      });
    };
    getList();

    //getting the data for every url

    const getSingle = async (link, category) => {
      const singleResponse = await fetch(link);
      const dataSingle = await singleResponse.json();
      if (category === "slider") slidercount++;
      if (category === "list") listcount++;
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
      if (category === "slider")
        dispatch({ type: "ADD POKEMON", payLoad: singlePok });
      if (category === "list")
        dispatch({ type: "ADD POKEMONS", payLoad: singlePok });
      if (slidercount === 6) {
        setTimeout(() => {
          dispatch({ type: "SETSLIDERLOAD FALSE" });
        }, 2000);
      }
      if (listcount === 15) {
        setTimeout(() => {
          dispatch({ type: "SETPOKEMONLOAD FALSE" });
        }, 2000);
      }
    };
  }, [urlList]);

  const handleFav = (id) => {
    const favId = id;

    dispatch({ type: "TOGGLE FAV", payLoad: favId });

    dispatch({ type: "ADD FAV" });
  };

  let urlData;
  const getUrls = async () => {
    const res = await fetch(urlList);
    urlData = await res.json();
   
    const { next, previous } = urlData;

    if (page === "next") {
      setUrlList(next);
     
    }
    if (page === "prev" && previous) {
     
      setUrlList(previous);
    }
  };
  const handleNext = () => {
    dispatch({ type: "EMPTYLIST" });
    page = "next";
    getUrls();
   
  };
  const handlePrev = () => {
    dispatch({ type: "EMPTYLIST" });
    page = "prev";
    getUrls();
    
  };

  const removeFav = (id) => {
    console.log("remove");
    dispatch({ type: "REMOVE FAV",payLoad:id });
  };

  return (
    <AppContext.Provider
      value={{
        featured,
        pokemonList,
        favList,
        sliderLoad,
        pokemonLoad,
        mainList,
        handleFav,
        handleNext,
        handlePrev,
        removeFav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
