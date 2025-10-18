import React, { useEffect, useState } from 'react'
import MenuTop from './MenuTop'
import MenuContent from './MenuContent'
import { fetchRandomMeal } from '../../../data/api';
import { fetchMealsByCategory } from '../../../data/api';

export default function Menu() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCategoryClick = async (category) => {
    setLoading(true);
    if (category === 'Random') {
      const promises = Array.from({length: 8}, () => fetchRandomMeal());
      const results = await Promise.all(promises);
      const randomMeals = results.map(m => m.meals[0]);
      // console.log(randomMeals)
      setMeals(randomMeals); 
    } else {
      const data = await fetchMealsByCategory(category);
      console.log(data.meals.slice(0,8))
      setMeals(data?.meals.slice(0,8) || []);
    }
    setLoading(false);
  }

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleCategoryClick('Random');
    }, 500);

    return () => clearTimeout(delayDebounce)
  }, [])

  return (
    <main className='min-h-[100vh] md:px-10 px-4 md:py-20 py-16 flex flex-col'>
     <MenuTop handleCategoryClick={handleCategoryClick} /> 
     {
      loading ? (
        <div className='flex justify-center items-center md:h-32 h-24'>
          <i className="fas fa-spinner animate-spin text-4xl text-orange-400"></i>
        </div>
      ) : (
        <MenuContent meals={meals} />
      )
     } 
    </main>
  )
}
