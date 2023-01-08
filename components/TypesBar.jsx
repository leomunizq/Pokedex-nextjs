import React from 'react'
import { TypesFilter } from './TypesFilter'
import { pokemonTypes } from '../pages/api/PokemonByType/pokemonTypes'

export const TypesBar = props => {
  const [{ name, color }] = pokemonTypes.filter(
    (item) => item.name === props.type
  );
  return (
    <>
  
       <TypesFilter key={name} name={name} color={color} />
     
    </>
  )
}



export default TypesBar