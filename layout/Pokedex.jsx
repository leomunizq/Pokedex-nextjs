import { useEffect } from 'react'
import { useState } from 'react'
import Body from '../components/Body'
import Pagination from '../components/Pagination'
import { MorePokemonsButtons } from '../components/MorePokemonsButtons'
import { fetchPokemonList } from '../pages/api/PokemonList'

export default function Pokedex() {
  const [page, setPage] = useState([1])
  const [loading, setLoading] = useState(false)
  const [pokemonLista, setPokemonLista] = useState([])
  const [showPagination, setShowPagination] = useState(true)
  const [pokemonAmount, setPokemonAmount] = useState(0)
  const [pokemonInfo, setPokemonInfo] = useState()

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
        showPagination={showPagination}
        setShowPagination={setShowPagination}
        pokemonAmount={pokemonAmount}
        setPokemonAmount={setPokemonAmount}
        pokemonInfo={pokemonInfo}
        setPokemonInfo={setPokemonInfo}
      />

      {showPagination ? (
        <Pagination
          setPage={setPage}
          page={page}
          showPagination={showPagination}
          setShowPagination={setShowPagination}
        />
      ) : (
        <MorePokemonsButtons
          pokemonAmount={pokemonAmount}
          setPokemonAmount={setPokemonAmount}
        />
      )}
    </>
  )
}
