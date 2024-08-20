import './Login.css';

import axios from 'axios';

import { useEffect, useState } from 'react';
import{ useNavigate,Link, json} from 'react-router-dom';


export default function Login() {
    const navigate=useNavigate();
    const homeNavigate=useNavigate();
    const[token,setToken]=useState("");
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const[error,setError]=useState('');

    // Log user and password for debugging (can remove later)
    console.log(user, password);
  
    async function LoginData() {
       try {
            const response = await axios.post("http://localhost:8080/vigorride/auth", {
                username: user,
                password: password
            }, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Basic ' + btoa(user + ":" + password)
                }
            });
            setToken(response.data);
            console.log(response.data);
            console.log(response.code);
            localStorage.setItem('login',JSON.stringify(response));
        } 
        catch (error) {
           
            console.log(error);
            console.error(error.code);
            setError(error.code);
           
        }

    }
    useEffect(()=>{
        userLogin();
    },[token,error])
   
    // Remove form default behavior
    function submitHandler(e) {
        e.preventDefault();
        
    }
    function userLogin(){
    const auth=localStorage.getItem("login");
    if(auth){
        homeNavigate('/')
    }
    else{
        homeNavigate("/login");
    }
}

    return (
        <div className="body">
            <div className="outside">
                <div className="sign-up">
                    <h1>Welcome Back!</h1>
                    <p>Sign up and discover a great amount of new opportunities!</p>
              <Link to="/signup"><button>Sign up</button></Link>      
                </div>
                <div className="inside">
                    <form onSubmit={submitHandler}>
                        <div id="wel">
                            <h1>Welcome</h1>
                            <p>Login into your account to continue</p>
                        </div>
                        <input
                            type="text"
                            placeholder="enter user name"
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p id="anchor" onClick={()=>navigate("/resetPassword",{state:{token:token}})}>forget your password?</p>
                        <button id="signin" type="submit" onClick={()=>LoginData()}>Sign In</button>
                        <p>{error}</p>
                        <p id="pera1">
                            Don't have an account?<span><a href="#">sign up</a></span>
                        </p>
                       
                    </form>
                </div>
            </div>
         
        </div>
     
    );
}