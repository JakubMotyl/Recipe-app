import React, { useEffect, useRef, useState } from 'react'
import {fetchCategories} from '../../../data/api';


const SlideButton = ({ arrow, onClick }) => {
  return (
    <button 
      className="md:px-3 md:py-2 px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 duration-200 rounded-full cursor-pointer"
      onClick={onClick}
    >
      {arrow}
    </button>
  )
}


export default function MenuTop({ handleCategoryClick }) {
  const scrollRef = useRef(null);
  const [categories, setCategories] = useState([])


  useEffect(() => {
    const handleFetchCategories = async () => {
      const data = await fetchCategories();
      // console.log(data.categories);

      const customCategories = [
        { idCategory: '999', strCategory: 'Random'},
        ...data.categories 
      ];

      setCategories(customCategories)
    }
    handleFetchCategories();
  }, []);

  const scroll = direction => {
    if (!scrollRef.current) return; 
    const scrollAmount = scrollRef.current.clientWidth / 2;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }
  
  return (
    <div className='flex flex-col space-y-6 mb-10'>

      {/* Title */}
      <div 
        className='font-medium md:text-[3rem] text-[2.5rem]'
        style={{fontFamily: '"Playfair Display", serif'}}
      >
        <p>Menu</p>
      </div>

      {/* Categories */}
      <div className='w-full flex items-center gap-4'>
        
        <SlideButton 
          arrow={<i className="fa-solid fa-chevron-left"></i>} 
          onClick={() => scroll('left')}
        />
        

        <div className='categories-container' ref={scrollRef}>
          {categories.map(category => (
            <button className='bg-gray-200 text-black w-fit font-medium md:py-2 md:px-9 py-1 px-6 rounded cursor-pointer hover:bg-gray-300 duration-200' 
              key={category.idCategory}
              onClick={() => handleCategoryClick(category.strCategory)}
            >
              {category.strCategory} 
            </button>  
          ))}
        </div>

        <SlideButton 
          arrow={<i className="fa-solid fa-chevron-right"></i>} 
          onClick={() => scroll('right')}
        />
      </div>
    </div>
  )
}
