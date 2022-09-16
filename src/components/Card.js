import React from 'react';

const Card = ({ meal }) => {
  return (
    <li>
      <div className='photo' style={{ backgroundImage: "url(" + meal.strMealThumb + ")" }}>
        <a href={meal.strYoutube} target="_blank">
          <h2>
            {meal.strMeal}
          </h2>
          <p className='origin'>{meal.strArea}</p>
        </a>
      </div>
      <div className='infos'>
        <h3>Recette</h3>
        <p>{meal.strInstructions}</p>
      </div>
    </li>
  );
};

export default Card;