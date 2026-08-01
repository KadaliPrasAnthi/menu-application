import Cookies from 'js-cookie';
import {Navigate} from 'react-router-dom';
const ProtectedRoute=({children})=>{
    const token = Cookies.get("party-menu-token");
    console.log("ProtectedRoute token:", token);
    if(!token){
       return <Navigate to="/login" replace />;
    }
       return children;
    
};
export default ProtectedRoute