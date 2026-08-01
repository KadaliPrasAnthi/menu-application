import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute  from './components/ProtectedRoute'
import MainMenu from './components/MainMenu'
import NotFound from './components/NotFound'

import './App.css'

const App=()=>{
  
  return (<BrowserRouter>
  <Routes>
   
     <Route path="/login" element={<Login/>}/>
     {/* <Route path="/" element={<MainMenu/>}/> */}
    <Route path="/" element={<ProtectedRoute><MainMenu/></ProtectedRoute>}/>
     <Route path="*" element={<NotFound/>}/>
  </Routes>
  
  </BrowserRouter>)
   
}

export default App
