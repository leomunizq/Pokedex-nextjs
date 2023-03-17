import Image from 'next/image'
import charizard from '../public/img/charizard.png'
import fire from '../public/img/pokemonTypes/fire.svg'
import Header from './Header'
import { Waves } from './Waves'

export const Banner = () => {
  return (
    <div className=" bg-gradient-to-t from-orange-600 via-orange-500 to-orange-400">
      <Header />
      <div
        className="
    
   xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between py-16
    
    "
      >
        <div className="description w-4/12">
          <span className="font-bold leading-5 text-2xl">#006</span>
          <div className="atributes"></div>
          <h1 className="font-bold text-7xl uppercase">Charizard</h1>
          <p className="text-base font-normal">
            Charizard se assemelha a um grande tradicional dragão europeu.
            Apesar da semelhança, Charizard é explicitamente um Pokémon dos
            tipos Fogo e Voador, e não um tipo Dragão, exceto em sua forma &quot;Mega
            Charizard X&quot;; No entanto, ele pode aprender ataques do tipo Dragão.
          </p>
          <button className="button">More details</button>
        </div>
        <div className="divider-1">
          <Image src={fire} alt="divider" width={60} height={60}></Image>
        </div>
        <div className="charizard-box w-2/6">
          <Image src={charizard} alt="pokemon"></Image>
        </div>
      </div>
      <Waves />
    </div>
  )
}
