
export const Reducer = (state, action) => {
  const { type, payLoad } = action;
  let { featured, pokemonList, favList, sliderLoad, pokemonLoad ,isFav} = state;
  if (type === "SETSLIDERLOAD TRUE") {
    return { ...state, sliderLoad: true };
  }
  if (type === "SETSLIDERLOAD FALSE") {
    return { ...state, sliderLoad: false };
  }
  if(type==="ADD POKEMON")
  {
      console.log(payLoad);
      return {...state,featured:[...featured,payLoad]}
  }
  if(type==="ADD FAVPOKEMON")
  {
    console.log(payLoad);
    return {...state,favList:[...favList,payLoad]}
  }
  if(type==="TOGGLE FAV")
  {
    
    return state
  }
};
