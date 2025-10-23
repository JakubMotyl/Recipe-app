import React, { useEffect, useState } from 'react'

const CardMeal = ({ meal, name, image, onClick }) => {
  return (
    <div 
      className='flex flex-col h-full bg-white text-black p-3 rounded cursor-pointer card-shadow duration-200 hover:scale-103'
      onClick={() => onClick(meal)}
    >
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

const MealSpecs = ({ meal, onClose }) => {
  const [showIngredients, setShowIngredients] = useState(true);

  // Ingredients List
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push(`${measure || ''} ${ingredient}`);
    }
  }

  const hasIngredients = ingredients.length > 0;

  // Steps
  const steps = meal.strInstructions
    ? meal.strInstructions.split('\n')
    : [];

  const hasInstructions = steps.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm px-2">
      {/* Overlay background */}
      <div
        className="bg-white rounded w-full md:w-4/5 lg:w-3/4 xl:w-2/3 max-h-[90vh] overflow-hidden md:flex md:flex-row flex-col relative"
      >
        {/* Close Button */}
        <button
          className="absolute top-1 right-1 cursor-pointer text-red-600 hover:text-red-500 md:text-[1.5rem] text-[1.25rem]"
          onClick={onClose}
        >
          <i className="fa-solid fa-square-xmark"></i>
        </button>

        {/* Left Side */}
        <div className="md:w-1/2 w-full md:h-auto h-[220px]">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full flex flex-col justify-between text-black">
          {/* Title and Desc */}
          <div className="flex flex-col items-center bg-orange-400 py-4 px-4">
            <p
              className="md:text-[2.3rem] text-[1.9rem] leading-tight text-center font-medium"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {meal.strMeal}
            </p>
            <span className="text-white font-light md:text-[1.15rem] text-[0.9rem]">
              {meal.strArea || 'Unknown'} • {meal.strCategory || 'Uncategorized'}
            </span>
          </div>

          {/* Ingredients / Steps Section */}
          <div className="flex-1 flex flex-col px-5 md:py-5 py-3 gap-4 overflow-y-auto">
            <div className="flex items-center gap-8 justify-center">
              <button
                className="popup-cat"
                style={{ fontFamily: '"Playfair Display", serif' }}
                onClick={() => setShowIngredients(true)}
              >
                INGREDIENTS
                {showIngredients && <div className="popup-cat-active"></div>}
              </button>
              <button
                className="popup-cat"
                style={{ fontFamily: '"Playfair Display", serif' }}
                onClick={() => setShowIngredients(false)}
              >
                STEPS
                {!showIngredients && <div className="popup-cat-active"></div>}
              </button>
            </div>

            {/* Scrollable list */}
            <div className="flex-1 overflow-y-auto pr-2">
              {showIngredients ? (
                hasIngredients ? (
                  <ul className="popup-ul">
                    {ingredients.map((ing, index) => (
                      <li key={index} className="popup-li-item">
                        {ing}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-center text-gray-500 italic">
                    No ingredients available.
                  </p>
                )
              ) : hasInstructions ? (
                <ul className="popup-ul">
                  {steps.map((step, index) => (
                    <li key={index} className="popup-li-item">
                      <p>{step}</p>
                    </li>
                  ))}
                </ul>
              ):(
                <p className="text-center text-gray-500 italic">
                  No instructions available.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function MenuContent({ meals }) {
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    if (selectedMeal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [selectedMeal])

  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-8 gap-6 flex-1'>
      {meals.map(meal => (
        <CardMeal 
          meal={meal}
          key={meal.idMeal}
          name={meal.strMeal}
          image={meal.strMealThumb}
          onClick={setSelectedMeal}
        />
      ))}

      {selectedMeal && 
        <MealSpecs meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
      }
    </div>
  )
}
