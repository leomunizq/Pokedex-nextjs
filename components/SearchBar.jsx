import { Search } from './Search'
import { TypesFilter } from './TypesFilter'

export const SearchBar = props => {
  return (
    <>
      <TypesFilter
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
      <Search
        pokemonLista={props.pokemonLista}
        setPokemonLista={props.setPokemonLista}
        page={props.page}
        setPage={props.setPage}
        loading={props.loading}
        setLoading={props.setLoading}
        showPagination={props.showPagination}
        setShowPagination={props.setShowPagination}
      />
    </>
  )
}
