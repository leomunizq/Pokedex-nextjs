// import { useState } from 'react'
// import useSWR from 'swr'

import { stringify } from 'postcss'
import { fetchPokemon } from '../pokemon/index'

// const response = (...args) => fetch(...args).then(res => res.json())

// export default function fetchPokemonList(page) {
//   const offset = 9 * (page - 1)
//   const baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`

//   const { data, error } = useSWR(baseUrl, response)
//   const results = data?.results
//   // console.log(data)

//   return {
//     data: data,
//     isLoading1: !error && !data,
//     isError1: error
//   }
// }

///////

// // This gets called on every request
// export default async function getServerSideProps(page) {
//   // Fetch data from external API
//   const offset = 9 * (page - 1)
//   const baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`

//   const res = await fetch(`${baseUrl}`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

// export const fetchPokemonList = async page => {
//   const offset = 9 * (page - 1)
//   const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`

//   const response = await fetch(URL)
//   const data = await response.json()

//   console.log('results', data.results)
//   // const promises = data.results.map(async name => await fetchPokemon(name)) ok
//   const listaDePokemons = data.results?.map(({ name }) => ({ name }))

//   console.log('listaDePokemonsapi', listaDePokemons)

//   const promises = data.results.map(
//     async pokemon => await fetchPokemon(pokemon.name)
//   )

//   const pokemonList = Promise.all(promises)

//   console.log('pokemonListaaaa', pokemonList)

//   return data
// }

export function fetchPokemonList(page) {
  const offset = 9 * (page - 1)
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`

  return fetch(URL, {
    method: 'GET'
  })
    .then(function (response) {
      // console.log('response api', response)
      return response.json()
    })
    .then(function (data) {
      // console.log('APIDEUCERTO', data)
      // var userid = JSON.parse(data)
      const listaDePokemons = data.results?.map(({ name }) => ({ name }))
      // console.log('listaDePokemons api', listaDePokemons)

      const dadosPokemon = listaDePokemons.map(function (item) {
        const { name } = item
        // console.log(' dadosPokemon', name)

        // const { data } = fetchPokemon(name)
        // console.log(' dadosPokemon fetch', data)

        return name
      })

      const promises = dadosPokemon.map(
        async pokemon => await fetchPokemon(pokemon)
      )

      // console.log('pokemonListaaaaPPII', promises)

      const pokemonList = Promise.all(promises).then(values => {
        // console.log('values', values)

        return values
      })

      // console.log('daddoooos api1', dadosPokemon)
      return pokemonList
    })
}
