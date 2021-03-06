export const Reducer = (state, action) => {
  const { type, payLoad } = action;
  let { featured, pokemonList, favList, mainList} = state;
  if (type === "SETSLIDERLOAD TRUE") {
    return { ...state, sliderLoad: true };
  }
  if (type === "SETSLIDERLOAD FALSE") {
    return { ...state, sliderLoad: false };
  }
  if (type === "SETPOKEMONLOAD TRUE") {
    return { ...state, pokemonLoad: true };
  }
  if (type === "SETPOKEMONLOAD FALSE") {
    return { ...state, pokemonLoad: false };
  }
  if (type === "ADD POKEMON") {
    return { ...state, featured: [...featured, payLoad] };
  }
  if (type === "ADD POKEMONS") {
    return { ...state, pokemonList: [...pokemonList, payLoad],mainList:[...mainList,payLoad] };
  }
  if (type === "TOGGLE FAV") {
    const temp = pokemonList.map((item) => {
      const {isFav} = item
      if (payLoad === item.id) {
       return {...item,isFav:!isFav}
      }
     
      return item;
    });
    const tempMain = mainList.map((item)=>{
      const {isFav} = item
      if (payLoad === item.id) {
        return {...item,isFav:!isFav}
       }
       return item;
    })
    
    return {...state,pokemonList:temp,mainList:tempMain};
  }
 
  if(type==='ADD FAV'){
    console.log('printing mainlist',mainList[0]);
    let jsonObject = mainList.map(JSON.stringify)
    let uniqueSet = new Set(jsonObject);
    let  uniqueArray = Array.from(uniqueSet).map(JSON.parse);
    const temp = uniqueArray.filter((item)=>{
      return item.isFav===true
    })
    
    return {...state,favList:temp}
  }
  if(type=== "REMOVE FAV")
  {
    const temp = favList.filter((item)=>{
      return item.id!==payLoad
    })
    const newtemp = pokemonList.map((item) => {
      if (payLoad === item.id) {
       return {...item,isFav:false}
      }
      return item;
    });
    const newtempMain = mainList.map((item) => {
      if (payLoad === item.id) {
       return {...item,isFav:false}
      }
      return item;
    });
    return {...state,favList:temp,pokemonList:newtemp,mainList:newtempMain}
  }
  if(type==="EMPTYLIST")
  {
    return {...state,pokemonList:[]}
  }
  if(type==="EMPTY FEATURED")
  {
    return{...state,featured:[]}
  }
};
