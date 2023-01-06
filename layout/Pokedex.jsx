import { useEffect } from 'react'
import { useState } from 'react'
import Body from '../components/Body'
import Pagination from '../components/Pagination'
import fetchPokemonList from '../pages/api/PokemonList'

export default function Pokedex() {
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const [pokemonLista, setPokemonLista] = useState([])



  return (
    <>
      <Body
        page={page}
        setPage={setPage}
        loading={loading}
        setLoading={setLoading}
      />

      <Pagination setPage={setPage} page={page} />
    </>
  )
}
