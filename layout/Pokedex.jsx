import { useEffect } from 'react'
import { useState } from 'react'
import Body from '../components/Body'
import Pagination from '../components/Pagination'
import { fetchPokemonList } from '../pages/api/PokemonList'

export default function Pokedex() {
  const [page, setPage] = useState(1)
  // const data = fetchPokemonList(page)
  // console.log('data', data)
  const [loading, setLoading] = useState(false)

  const [pokemonLista, setPokemonLista] = useState([])

  // console.log('pokemonLista pokedex', pokemonLista)
  useEffect(() => {
    ;(async () => {
      setPokemonLista(await fetchPokemonList(page))
    })()
  }, [page])

  return (
    <>
      <Body
        page={page}
        setPage={setPage}
        loading={loading}
        setLoading={setLoading}
        pokemonLista={pokemonLista}
        setPokemonLista={setPokemonLista}
      />

      <Pagination setPage={setPage} page={page} />
    </>
  )
}
