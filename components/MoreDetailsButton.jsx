import React from 'react'
import { pokemonTypes } from '../pages/api/PokemonByType/pokemonTypes';

export const MoreDetailsButton = (props) => {

  // const [{ name, color }] = pokemonTypes.filter(
  //   (item) => item.name === props.type
  // );

  return (
    <button
    className="button-og"
    style={{ backgroundColor: props.color }}
    value={name}
    onClick={props.handleClick}
  >
    Read More
  </button>
  )
}
