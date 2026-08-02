import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Login from './components/Login'
import ProtectedRoute  from './components/ProtectedRoute'
import MainMenu from './components/MainMenu'
import NotFound from './components/NotFound'
import FoodDetails from './components/MenuDetails'
import SavedRecipes from './components/SavedRecipes'
import './App.css'

const App=()=>{
  

  return (<BrowserRouter>
  <Routes>
   
     <Route path="/login" element={<Login/>}/>
     
    <Route path="/" element={<ProtectedRoute><MainMenu/></ProtectedRoute>}/>
     <Route path="/menu/:id" element={<FoodDetails/>}/>
      <Route path="/saved-recipes" element={<SavedRecipes/>}/>
     <Route path="*" element={<NotFound/>}/>
  </Routes>
  
  </BrowserRouter>)
   
}

export default App
