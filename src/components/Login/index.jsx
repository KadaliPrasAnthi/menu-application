import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import './index.css';

const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [message,setMessage]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    const [showErr,setShowErr]=useState(false);
    const navigate=useNavigate();
    const onSuccess=(token)=>{
        console.log("onSuccess called");
        setShowErr(false);
        Cookies.set('party-menu-token',token);
        const userDetails={email,password};
        localStorage.setItem('party-menu-user',JSON.stringify(userDetails));
        console.log(localStorage.getItem('party-menu-user'))
        console.log(Cookies.get('party-menu-token'));
        navigate("/",{replace:true});
        console.log("navigated to home page");
    }
    const onFailure=(data)=>{
        console.log("onFailure called");
        setShowErr(true);
        setMessage(data.message);
    }
    const handlesubmitForm=async (e)=>{
        e.preventDefault();
        console.log("form submitted");
        setIsLoading(true)
        const url="https://serverless-api-teal.vercel.app/api/auth/signin";
        const userDetails={email,password};
        //console.log(userDetails);
        const options={
            method:"POST",
            headers: {
             "Content-Type": "application/json",
            },

            body:JSON.stringify(userDetails),
        }
        const response=await fetch(url,options)
        const data=await response.json();
        setIsLoading(false)
        console.log(data);
    
        if(data.success){
           onSuccess(data.data.token);
       }
       else{
            onFailure(data);
       }
}
    const onChangeEmail=(e)=>{
        setEmail(e.target.value);
    }
    const onChangePassword=(e)=>{
        setPassword(e.target.value);
    }
        
    
    return(
        <div className="login-container">
            <form className='login-form' onSubmit={handlesubmitForm}>
                <div className='logo-container'> <img className='website-logo' src="https://static.vecteezy.com/system/resources/thumbnails/032/483/662/small_2x/food-menu-food-recipe-logo-design-template-spoon-fork-with-old-paper-scroll-vintage-letter-illustration-vector.jpg"/>
                <h1>Party Menu</h1>
                <p className='login-form-desc'>Sign in to explore our delicious menu</p></div>
                 {showErr&&<p className='sign-in-error'>{message}</p>}
                <label htmlFor='email'>Email</label>
                
                <input id="email" type="email" placeholder='admin@example.com' required onChange={onChangeEmail}/>
               <br/>
                <label htmlFor="password">Password</label>
                
                <input id="password" type="password" placeholder='...........' required onChange={onChangePassword}/>
                <br/>
                <button type='submit' className='login-button'>{isLoading?<p>Signing in...</p>:<p>Sign In</p>}</button>
               
            </form>
        </div>
    )
}
export default Login;
