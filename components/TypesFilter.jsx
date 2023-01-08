import { pokemonTypes } from '../pages/api/PokemonByType/pokemonTypes'
import { fetchPokemonByType } from '../pages/api/PokemonByType/index'
import { useEffect, useState } from 'react'

export const TypesFilter = props => {
  const [selectedType, setSelectedType] = useState('')

  const handleClick = async e => {
    e.preventDefault()
    let varName = e.currentTarget.value
    setSelectedType(varName)
    props.setPokemonAmount(9)
    const data = await fetchPokemonByType(varName)

    props.setPokemonLista(data)
    props.setShowPagination(false)
  }

  useEffect(() => {
    if (selectedType) {
      ;(async () => {
        props.setPokemonLista(
          await fetchPokemonByType(selectedType, props.pokemonAmount)
        )
      })()
    }
  }, [props.pokemonAmount])

  return (
    
        <button
          key={props.name}
          value={props.name}
          type="button"
          onClick={handleClick}
          style={{ backgroundColor: props.color }}
          // id="pokeType"
          className="text-white  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
        >
          {props.name}
        </button>
     
  )
}
