export async function fetchCategories() {
  try {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    if (!data.ok) {
      throw new Error(`Response status: ${data.status}`);
    }
    
    const res = await data.json();
    return res;

  } catch (error) {
    console.error(error.message)
  }
};

export async function fetchRandomMeal() {
  try {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    if (!data.ok) {
      throw new Error(`Response status: ${data.status}`);
    }
    
    const res = await data.json();
    return res;

  } catch (error) {
    console.error(error.message)
  }
};

export async function fetchMealsByCategory(category) {
  try {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    if (!data.ok) {
      throw new Error(`Response status: ${data.status}`);
    }
    
    const res = await data.json();
    return res;

  } catch (error) {
    console.error(error.message)
  }
};


