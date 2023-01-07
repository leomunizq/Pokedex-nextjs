import { fetchPokemon } from '../pokemon/index'
export const fetchPokemonByType = async (type, pokemonAmount = 9) => {
  const URL = `https://pokeapi.co/api/v2/type/${type}`

  const response = await fetch(URL)
  const data = await response.json()

  // console.log('type data', data)

  const promises = data.pokemon.filter(
    (item, index) => index + 1 <= pokemonAmount && item
  )

  const promises2 = promises.map(
    async item => await fetchPokemon(item.pokemon.name)
  )

  // console.log('type promisses2', promisses2)

  const pokemonList = Promise.all(promises2)
  // console.log('type pokemonList', pokemonList)

  return pokemonList
}
