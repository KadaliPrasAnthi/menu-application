import{useParams} from 'react-router'
import { useNavigate } from 'react-router'
import {getMenuItemById} from '../../data/menuData'

import './index.css'
//import{useEffect,useState} from 'react'
const FoodDetails=()=>{
    const{ id }=useParams()
    const menuItem = getMenuItemById(id);
    
    const navigate = useNavigate();
    const onClickBackToMenu=()=>{
        //window.history.back();
        navigate('/');

    }
    const onClickSavedRecipes=()=>{
        navigate('/saved-recipes');
    }
    const onClickSaveRecipe=()=>{
        console.log('Save Recipe button clicked');
        const savedRecipes =
    JSON.parse(localStorage.getItem("savedRecipes")) || [];

  const alreadySaved = savedRecipes.find(
    item => item.id === menuItem.id
  );

  if (alreadySaved) {
    alert("Recipe already saved");
    return;
  }

  savedRecipes.push(menuItem);

  localStorage.setItem(
    "savedRecipes",
    JSON.stringify(savedRecipes)
  );

  alert("Recipe saved successfully");
    }
    return (
        <div className='menu-details-main-container'>
            <div className="menu-detail-container">
            <nav className='menu-details-navbar'>
                <div className='menu-details-navbar-left'>
                    <button className='menu-details-navbar-button' onClick={onClickBackToMenu}>Back to Menu</button>
                </div>
                <div className='menu-details-navbar-right'>
                    <button className='menu-details-navbar-button' onClick={onClickSavedRecipes}>Saved Recipes</button>
                    <button className='save-recipe-button' onClick={onClickSaveRecipe}>Save Recipe</button>
                </div>
            </nav>
            <div className='menu-details-card-container'>
                <div className='menu-details-image-container'>
                    <img src={menuItem.image} alt={menuItem.name}/>
                </div>
                <div className='menu-details-card-content'>
                    <div className='category-diet-container'>
                        <span className='category-tag'>{menuItem.category}</span>
                    <span className='diet-tag'>{menuItem.diet ? 'Veg' : 'Non-Veg'}</span>
                    </div>
                    
                    <h2>{menuItem.name}</h2>
                    <p>{menuItem.servings}</p>
                    <p>Price: {menuItem.fullDescription}</p>
                </div>
            </div>
            <div className='ingredients-container'>
                <h3>Ingredients</h3>
                <ul className='ingredients-ul-container'>
                    {menuItem.ingredients.map((eachIngredient) => (
                        <li key={eachIngredient.name} className='ingredient-list-item'>
                            <span className='ingredient-name'>{eachIngredient.name}</span>
                            <span className='ingredient-quantity'>{eachIngredient.quantity}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
        
    )
}
export default FoodDetails