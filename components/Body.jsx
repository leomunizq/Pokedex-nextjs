import { useEffect, useState } from 'react'

import Pagination from './Pagination'
import { CardView } from './CardView'
import fetchPokemonList from '../pages/api/PokemonList/index'
import fetchPokemon from '../pages/api/pokemon'
import { SearchBar } from './SearchBar'

export default function Body(props) {
  // const { data, isLoading1, isError1 } = fetchPokemonList(props.page)
  // console.log('props.data body', props.pokemonLista)

  return (
    <>
      <SearchBar
        pokemonLista={props.pokemonLista}
        setPokemonLista={props.setPokemonLista}
        page={props.page}
        setPage={props.setPage}
        loading={props.loading}
        setLoading={props.setLoading}
        showPagination={props.showPagination}
        setShowPagination={props.setShowPagination}
        pokemonAmount={props.pokemonAmount}
        setPokemonAmount={props.setPokemonAmount}
      />

      <div className="xl:container xl:mx-auto grid grid-cols-3 gap-20 m-20">
        <CardView
          pokemonLista={props.pokemonLista}
          page={props.page}
          setPage={props.setPage}
          loading={props.loading}
          setLoading={props.setLoading}
          pokemonInfo={props.pokemonInfo}
          setPokemonInfo={props.setPokemonInfo}
          modalVisible={props.modalVisible}
          setModalVisible={props.setModalVisible}
        />
      </div>
      <div className="pagina 1"></div>
    </>
  )
}
