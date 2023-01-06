import { useState } from 'react'
import useSWR from 'swr'

const response = (...args) => fetch(...args).then(res => res.json())

export default function fetchPokemonList(page) {
  const offset = 9 * (page - 1)
  const baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`

  const { data, error } = useSWR(baseUrl, response)
  const results = data?.results
  // console.log(data)

  return {
    data: data,
    isLoading1: !error && !data,
    isError1: error
  }
}
