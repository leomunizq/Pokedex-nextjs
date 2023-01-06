export const SearchBar = ({ pokemonLista, setPokemonLista }) => {
  return (
    <Search
      pokemonLista={props.pokemonLista}
      setPokemonLista={props.setPokemonLista}
      page={props.page}
      setPage={props.setPage}
      loading={props.loading}
      setLoading={props.setLoading}
    />
  )
}
