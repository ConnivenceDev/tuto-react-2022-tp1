import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Home = () => {

  const [meals, setMeals] = useState([]);

  const handleChange = (ev) => {
    if (ev.target.value.length > 2) {
      axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + ev.target.value)
        .then((res) => res.data.meals ? setMeals(res.data.meals) : setMeals([]));
    }
  }

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => setMeals(res.data.meals));
  }, [])

  return (
    <div>
      <h1>React Cook</h1>
      <input type="text" placeholder="chicken" onChange={(ev) => handleChange(ev)} />

      <ul>
        {
          meals.map((meal, index) => (
            <Card key={index} meal={meal} />
          ))
        }
      </ul>
    </div>
  );
};

export default Home;