import { fetchPokemon } from '../pages/api/pokemon/index'
import Image from 'next/image'
import iconweight from '../public/img/iconweight.svg'
import iconruler from '../public/img/iconruler.svg'
import Pagination from './Pagination'
import { pokemonTypes } from '../pages/api/PokemonByType/pokemonTypes'
import { ButtonType } from './ButtonType'


export const CardView = props => {

 
  // const [{ color }] = pokemonTypes.filter(
  //  (type) =>   props.pokemonInfo.types[0].type.name.indexOf(type.name) !== -1
  // );

  console.log(props.pokemon)

  const handleClick = async e => {
    e.preventDefault()
    let varName = e.currentTarget.value

    const pokemon = await fetchPokemon(varName)
    props.setModalVisible(true)
    props.setPokemonInfo(pokemon)
  }

  
  return (
    <>
      {props.pokemonLista.map(dado => (
        <div
          key={dado?.name}
          className="card-back bg-white border border-gray-200 rounded-3xl shadow-md dark:bg-gray-800/25 dark:border-gray-700"
          style={{ backgroundColor: props.color }}
        >
          <a className="flex justify-center " 
          
          >
            <Image
              src={dado?.sprites.other['home'].front_default}
              height={300}
              width={300}
              alt="fotos"
              
            ></Image>
          </a>
          <div className="p-0">
            <a>
              <h6 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                #001
              </h6>
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                {dado?.name}
              </h5>
            </a>
            <div className="gap-2 justify-center flex">
              
              
              {dado?.types.map(({ type }) => (
                
                <ButtonType key={type.name} type={type.name} tabIndex={false} />
              ))}


              


            </div>

            <div className="atributos flex justify-center gap-6 m-4">
              <div className="peso-box flex-col text-center">
                <div className="peso flex gap-2">
                  <Image src={iconweight} alt="pokemon" loading="lazy"></Image>
                  <span>{dado?.weight / 10}kg</span>
                </div>
                <span>Peso</span>
              </div>

              <div className="altura-box flex-col text-center">
                <div className="altura flex gap-2">
                  <Image src={iconruler} alt="pokemon" loading="lazy"></Image>
                  <span>{dado?.height / 10}m</span>
                </div>
                <span>Altura</span>
              </div>
            </div>

            <button
              className="button-og"
              // style={{ backgroundColor: color }}
              value={dado?.name}
              onClick={handleClick}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </>
  )
}
