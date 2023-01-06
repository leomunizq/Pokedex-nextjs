// import useSWR from 'swr'

// const response = (...args) => fetch(...args).then(res => res.json())

// export default function fetchPokemon(name) {
//   const baseUrl = `https://pokeapi.co/api/v2/pokemon/`
//   const { data, error } = useSWR(`${baseUrl}${name}`, response)

//   return {
//     dados: data,
//     isLoading: !error && !data,
//     isError: error
//   }
// }

export const fetchPokemon = async pokemon => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  let response
  let data
  let error

  response = await fetch(URL)
  data = await response.json()

  try {
    response = await fetch(URL)
    data = await response.json()
    error = false
  } catch {
    data = null
    error = true
  }

  // console.log(' apit', data)
  return data
}
