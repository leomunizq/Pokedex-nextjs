import iconweight from '../public/img/iconweight.svg'
import iconruler from '../public/img/iconruler.svg'
import divider from '../public/img/divider.svg'
import Image from 'next/image'
import { ProgressBar } from './ProgressBar'
import { useState } from 'react'

export const Modal = props => {
  const statsNumber = 50
  const statsName = ''

  const formatStatName = statName => {
    switch (statName) {
      case "hp":
        return "HP";
      case "attack":
        return "Attack";
      case "defense":
        return "Defense";
      case "special-attack":
        return "Sp. Atk";
      case "special-defense":
        return "Sp. Def";
      case "speed":
        return "Speed";
    }
  };

  return (
    <>
      <div
        onClick={e =>
          e.target === e.currentTarget && props.setModalVisible(false)
        }
        class="z-50 fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4  bg-zinc-900	 bg-opacity-70 overflow-y-auto"
      >
        <div class="
        
        max-w-5xl flex justify-between w-full mx-auto    rounded-3xl  
         backdrop-1
        
        
        ">
          <div class="w-4/12 relative flex justify-center">
            <div key={props.pokemonInfo.name} className="absolute bottom-5">
              <a className="teste flex justify-center " href="#">
                <Image
                  src={props.pokemonInfo.sprites.other['home'].front_default}
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
                    {props.pokemonInfo.name}
                  </h5>
                </a>
                <div className="tipo justify-center flex">
                  <button
                    type="button"
                    className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                  >
                    {props.pokemonInfo.types[0].type.name}
                  </button>
                  <button
                    type="button"
                    className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                  >
                    {props.pokemonInfo.types[0].type.name}
                  </button>
                </div>

                <div className="atributos flex justify-center gap-6 m-4">
                  <div className="peso-box flex-col text-center">
                    <div className="peso flex gap-2">
                      <Image
                        src={iconweight}
                        alt="pokemon"
                        loading="lazy"
                      ></Image>
                      <span>{props.pokemonInfo.weight / 10}kg</span>
                    </div>
                    <span>Peso</span>
                  </div>

                  <div className="altura-box flex-col text-center">
                    <div className="altura flex gap-2">
                      <Image
                        src={iconruler}
                        alt="pokemon"
                        loading="lazy"
                      ></Image>
                      <span>{props.pokemonInfo.height / 10}m</span>
                    </div>
                    <span>Altura</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* divider */}

          <div class="flex flex-col justify-between after:content-[''] after:block after:w-px after:bg-white/25 after:h-40  after:mx-auto before:block before:w-px before:bg-white/25 before:h-40 before:mx-auto before:mb-0">
            <Image src={divider} alt="pokemon" loading="lazy"></Image>
          </div>
          {/* second div */}
          <div class="pt-9 w-full max-w-xl pb-6 px-6 -mb-2">
            <div className="mb-4 justify-between flex">
              <h1 className="text-left text-white-100  text-4xl">Stats</h1>
              <button>
              <svg onClick={e =>
          e.target === e.currentTarget && props.setModalVisible(false)
        } className="w-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg>
              </button>
            </div>

            <div className="teste h-full ">
              <ul>
                {props.pokemonInfo.stats.map((stat, index) => {
                  return (
                    <>
                      <ProgressBar
                        key={index}
                        statsNumber={stat.base_stat}
                        statsName={formatStatName(stat.stat.name)}
                      />
                    </>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
