import { useEffect, useState } from 'react'

import Pagination from './Pagination'
import { CardView } from './CardView'
import fetchPokemonList from '../pages/api/PokemonList/index'
import fetchPokemon from '../pages/api/pokemon'
import { Search } from './Search'

export default function Body(props) {
  const { data, isLoading1, isError1 } = fetchPokemonList(props.page)
  const [pokemonLista, setPokemonLista] = useState([])

  // const teste = data

  // console.log('pokemonLista body', data)

  return (
    <>
      <Search />
      <div className="xl:container xl:mx-auto grid grid-cols-3 gap-20 m-20">
        <CardView data={data} />
      </div>
      <div className="pagina 1"></div>
    </>
  )
}
