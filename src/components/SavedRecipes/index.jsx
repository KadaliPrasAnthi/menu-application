import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
const ItemCard=({itemDetails,onClickItem,onClickDelete})=>{
   const{id,name,description,category,servings,image,isVeg}=itemDetails
   const tagStyle=(isVeg)?'veg':'non-veg'
   const tagData=(isVeg)?'VEG':'NON VEG'
   return (<li className='item-card' >
           <div className='item-image-container' onClick={()=>onClickItem(id)}>
              <img className='item-image' src={image} alt="item-img"/>
              <span className={`item-tag ${tagStyle}`}>{tagData}</span>
            </div>
            
            <div className='item-content-container'>
              <p className='item-category'>{category.toLocaleUpperCase()}</p>
              <h2 className='item-name'>{name}</h2>
              <p className='item-desc'>{description}</p>
              <p>{servings}</p>
              <button className="remove-button" onClick={() => onClickDelete(id)}>Remove</button>
            </div>

          </li>)
}
const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const recipes =
      JSON.parse(localStorage.getItem("savedRecipes")) || [];

    setSavedRecipes(recipes);
  }, []);
  const handleItemClick = (itemId) => {
    navigate(`/menu/${itemId}`);
  }
  const handleDeleteItem = (itemId) => {
    const updatedRecipes = savedRecipes.filter(recipe => recipe.id !== itemId);
    setSavedRecipes(updatedRecipes);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
  }
  const noRecipesSavedView=()=>{
    return (
      <div>
        <h1>Saved Recipes</h1>
        <p>No recipes saved.</p>
      </div>
    );
  }
  const recipesSavedView=()=>{
    return (
      <div className="saved-recipes-container">
        <h1>Saved Recipes</h1>
        <p>{savedRecipes.length} recipes saved.</p>
        <ul className="saved-recipes-ul-container">
          {savedRecipes.map(recipe => (
            <ItemCard key={recipe.id} itemDetails={recipe} onClickItem={handleItemClick} onClickDelete={handleDeleteItem} />
          ))}
        </ul>
      </div>
    );
  } 
  return (
    <div>
        {savedRecipes.length === 0 ? noRecipesSavedView() : recipesSavedView()}
    </div>
  );
};

export default SavedRecipes;