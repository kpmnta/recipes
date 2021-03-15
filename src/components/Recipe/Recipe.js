import React from 'react';
import styles from './recipe.module.css'
 
const Recipe = ({ title, image, ingredients, link}) => {
  return(
    <div className={ styles.recipe }>
      <div className={ styles.flex }>
        <img className={ styles.image } src={ image } alt={ title }/>
        <h1>{ title }</h1>
      </div>
      <ul>
        { ingredients.map(ingredient => (
          <li>{ ingredient.text }</li>
        )) }
      </ul>
      <a 
        target="_blank" 
        className={ styles.redirect } 
        href={ link }
        rel="noopener noreferrer"
      >
        follow the recipe!
      </a>
    </div>  
  );
}

export default Recipe;