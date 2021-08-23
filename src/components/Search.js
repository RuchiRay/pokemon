import React from 'react'
import { HiSearch } from 'react-icons/hi'
import { useGlobalContext } from '../context'
import '../styles/search.css'
export const Search = () => {
    const {term,setTerm} = useGlobalContext();
    return (
        <div className='search-form'>
            <p>Search your favourite Pokemon</p>
           <form>
               <input className='input' type="text" value={term} onChange={(e)=>setTerm(e.target.value)}/>
               <button type="submit" className='search-btn'><HiSearch/></button>
           </form>
        </div>
    )
}
