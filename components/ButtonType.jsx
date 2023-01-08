import { pokemonTypes } from '../pages/api/PokemonByType/pokemonTypes'


export const ButtonType = props => {
  const [{ name, color }] = pokemonTypes.filter(
    (item) => item.name === props.type
  );

  return (
 
        <button
          key={name}
          value={name}
          type="button"
          onClick={props?.handleClick}
          style={{ backgroundColor: color }}
          id="pokeType"
          className="text-white  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
        >
          {name}
        </button>
 
  )
}
