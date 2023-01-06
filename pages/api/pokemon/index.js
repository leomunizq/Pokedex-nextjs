import useSWR from 'swr'

const response = (...args) => fetch(...args).then(res => res.json())

export default function fetchPokemon(name) {
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/`
  const { data, error } = useSWR(`${baseUrl}${name}`, response)

  return {
    dados: data,
    isLoading: !error && !data,
    isError: error
  }
}
