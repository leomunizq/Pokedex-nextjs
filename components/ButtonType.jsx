import Image from 'next/image';
import { pokemonTypes } from '../pages/api/PokemonByType/pokemonTypes'

import {bug} from '../public/img/pokemonTypes/bug.svg'


export const ButtonType = props => {
  const [{ name, color }] = pokemonTypes.filter(
    (item) => item.name === props.type
  );


  const picture = require(`../public/img/pokemonTypes/${name}.svg`); // this is sync


  return (
 
        <button
          key={name}
          value={name}
          type="button"
          onClick={props?.handleClick}
          style={{ backgroundColor: color }}
          id="pokeType"
          className="text-white  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none "
        >
          <span className='flex justify-center'>
          <Image 
          src={picture}
          width={16}
          height={16}
          alt="pokemon type"
          className='mr-2'
          />
          {name}
          </span>
        </button>
 
  )
}
