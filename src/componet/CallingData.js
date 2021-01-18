import React, { useEffect, useState } from 'react';
import { usePokemon } from './Pokemon';
const CACHE = {};

export default function CallingData(url, defaultValue = []) {
    const[name,setName] = useState("pikachu")
    const[value,changeValue] = useState("")
    const { pokemon, isLoading, error } = usePokemon(name);

 useEffect(()=>{
     let div
     console.log("mount")
     const interval =setInterval(()=>{
         console.log("mount",document.querySelector("#we"));
       
     },1000)
    
   
     return()=>{
      console.log("unmount",document.querySelector("#we"));
         //console.log("component umnount")
         clearInterval(interval)
        }
     
 },[])  
  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Network error</>;
  }
  return (
    <>
      <input id="we" type="text" onChange={e=>changeValue(e.target.value)}/>
      <button onClick={()=>setName(value)}>search</button>
      <div>
      <img src={pokemon.sprites.front_default} alt="pokemon" />
      <h1>{pokemon.species.name}</h1>
      </div>
     
    </>
  );
}

