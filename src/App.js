import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheese } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Recipe from '../src/components/Recipe/Recipe'

const App = () => {
  const APP_ID = 'f2b46080';
  const APP_KEY = '61ec159b89dbbd92c5bc6d11c62c50e8';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }

  const updateSearch = event => {
    setSearch(event.target.value);
    console.log(search);
  }

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <div className="logo">
        <FontAwesomeIcon icon={ faCheese } />
        <h1>search for the best recipe!</h1>
      </div>
      <form onSubmit={ getSearch } className="search__form">
        <input 
          className="search__bar" 
          type="text" 
          value={ search } 
          onChange={ updateSearch }
          placeholder="what are you craving right now?"
        />
        <button 
          className="search__button" 
        >
          search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            kay={ recipe.recipe.label }
            title={ recipe.recipe.label }
            calories={ recipe.recipe.calories }
            image={ recipe.recipe.image }
            ingredients={ recipe.recipe.ingredients }
            link={ recipe.recipe.url }
          />
        ))}
      </div>
      <p className="credits">developed by <a 
          target="_blank" 
          href="https://github.com/kpmnta"
          rel="noopener noreferrer"
        >kai pimenta</a>
      </p>
    </div>
  );
}

export default App;
