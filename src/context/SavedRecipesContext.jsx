import { createContext, useState } from "react";

const SavedRecipesContext = createContext();

export const SavedRecipesProvider = ({ children }) => {
    const [savedRecipes, setSavedRecipes] = useState([]);

    const saveRecipe = (recipe) => {
        setSavedRecipes((prev) => [...prev, recipe]);
    };

    const removeRecipe = (recipe) => {
        setSavedRecipes((prev) => prev.filter((r) => r.id !== recipe.id));
    };

    return (
        <SavedRecipesContext.Provider value={{ savedRecipes, saveRecipe, removeRecipe }}>
            {children}
        </SavedRecipesContext.Provider>
    );
};

export default SavedRecipesContext;
