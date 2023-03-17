import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

import { pokemonTypes } from '../pages/api/PokemonByType/pokemonTypes'
import { fetchPokemonByType } from '../pages/api/PokemonByType/index'
import { useEffect, useState } from 'react'
import { ButtonType } from './ButtonType'

export const TypesFilter = props => {
  const [selectedType, setSelectedType] = useState('')
let {pokemonAmount} = props.pokemonAmount
   


  const handleClick = async e => {
    e.preventDefault()
    let varName = e.currentTarget.value
    setSelectedType(varName)
    props.setPokemonAmount(9)
    const data = await fetchPokemonByType(varName)

    props.setPokemonLista(data)
    props.setShowPagination(false)
  }

  useEffect(() => {
    if (selectedType) {
      ;(async () => {
        props.setPokemonLista(
          await fetchPokemonByType(selectedType, props.pokemonAmount)
        )
      })()
    }
  }, [pokemonAmount, selectedType])

  return (
    <div className='w-4/12'>
 <Swiper
      // spaceBetween={30}
      modules={[Navigation, Pagination]}
      slidesPerView={5}
      spaceBetween={10}
      navigation={true}
    >
     
     {pokemonTypes.map(({ name }) => (
    <SwiperSlide 
    key={name}
    style={{flexShrink: 'unset'}}
    >
      
      <ButtonType key={name} type={name} tabIndex={false} handleClick={handleClick}/>
      
      </SwiperSlide>
        
    
      ))}
    </Swiper>
  

      
    </div>
  )
}

