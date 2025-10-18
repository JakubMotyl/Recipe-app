import React, { useEffect, useState } from 'react'
import {fetchRandomMeal} from '../../../data/api'

const CardMeal = ({ name, image}) => {
  return (
    <div className='flex flex-col h-full bg-white text-black p-3 rounded cursor-pointer card-shadow duration-200 hover:scale-105'>
      <div>
        <img 
          src={image} 
          alt={name} 
          className='w-full md:h-42 h-34 object-cover rounded'
        />
      </div>
      <div className='my-3 md:my-4 flex-grow'>
        <p className='font-bold mb-1 text-[0.9rem] md:text-[1rem]'>{name}</p>
        <p className='font-medium text-red-400 text-[0.85rem] md:text-[0.95rem]'>$50</p>       
      </div>
      <div className='flex items-center'>
        {
          Array.from({length: 5}, (_, index) => (
            <i key={index} className="fa-solid fa-star text-yellow-300 md:text-[1.15rem] text-[1.05rem]"></i>
          ))
        }
      </div>
    </div>
  )
}

export default function MenuContent({ meals }) {
  
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-8 gap-6 flex-1'>
      {meals.map(meal => (
        <CardMeal 
          key={meal.idMeal}
          name={meal.strMeal}
          image={meal.strMealThumb}
        />
      ))}
    </div>
  )
}
