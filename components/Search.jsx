import React, { useState } from 'react'
import { fetchPokemon } from '../pages/api/pokemon/index'

export const Search = ({ pokemonLista, setPokemonLista }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    const requestPokemon = await fetchPokemon(inputValue.toLowerCase())

    setPokemonLista([requestPokemon])

    setInputValue('')
  }

  return (
    <div>
      <form className="flex items-center justify-end">
        <label for="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-80">
          <input
            type="text"
            id="simple-search"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
             />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
    </div>
  )
}
