import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'
const ProtectedRoute=({children})=>{
    if(Cookies.get('party-menu-token')===undefined){
        <Navigate to="/login"/>
    }
    else{
        return children
    }
}
export default ProtectedRoute