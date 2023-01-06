import { fetchPokemon } from '../pages/api/pokemon/index'
import Image from 'next/image'
import iconweight from '../public/img/iconweight.svg'
import iconruler from '../public/img/iconruler.svg'
import Pagination from './Pagination'

export const CardView = ({ pokemonLista, setPokemonLista }) => {
  return (
    <>
      {pokemonLista.map(dado => (
        <div
          key={dado?.name}
          className=" bg-white border border-gray-200 rounded-3xl shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <a className="teste flex justify-center " href="#">
            <Image
              src={dado?.sprites.other['home'].front_default}
              height={300}
              width={300}
              alt="fotos"
            ></Image>
          </a>
          <div className="p-0">
            <a href="#">
              <h6 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                #001
              </h6>
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                {dado?.name}
              </h5>
            </a>
            <div className="tipo justify-center flex">
              <button
                type="button"
                className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
              >
                {dado?.types[0].type.name}
              </button>
              <button
                type="button"
                className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
              >
                {dado?.types[0].type.name}
              </button>
            </div>

            <div className="atributos flex justify-center gap-6 m-4">
              <div className="peso-box flex-col text-center">
                <div className="peso flex gap-2">
                  <Image src={iconweight} alt="pokemon" loading="lazy"></Image>
                  <span>{dado?.weight}kg</span>
                </div>
                <span>Peso</span>
              </div>

              <div className="altura-box flex-col text-center">
                <div className="altura flex gap-2">
                  <Image src={iconruler} alt="pokemon" loading="lazy"></Image>
                  <span>{dado?.height}cm</span>
                </div>
                <span>Altura</span>
              </div>
            </div>

            <button className="button-og">Read More</button>
          </div>
        </div>
      ))}
    </>
  )
}
