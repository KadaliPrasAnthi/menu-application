import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute  from './components/ProtectedRoute'
import MainMenu from './components/MainMenu'

import './App.css'

const App=()=>{
  return <BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<ProtectedRoute><MainMenu/></ProtectedRoute>}/>
  </Routes>
  
  </BrowserRouter>
   
}

export default App
