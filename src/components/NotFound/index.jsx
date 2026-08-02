import {useNavigate} from 'react-router-dom'
import './index.css'
const NotFound=()=>{
    const navigate=useNavigate();
    const onClickBackToMenu=()=>{
        navigate('/');
    }
    return <div className='not-found-container'>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page your looking for does not exist or has been moved.</p>
        <button onClick={onClickBackToMenu}>Back to Menu</button>
    </div>
}
export default NotFound 