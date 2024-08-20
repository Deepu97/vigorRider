import './Home.css';
import {Link, useNavigate} from 'react-router-dom';
export default function HomePage(){
    const navigate=useNavigate();
    function clearUser(){
        localStorage.clear('user');
        navigate("/login")
    }
    const auth=localStorage.getItem("user");
    const login=localStorage.getItem("login");
    return(
        <>
        <div className="container">
        <div className='vigorh1'>
            <h1>VigorRide</h1>
        </div>
        <div className="navList">
           <Link className='Link' to="/"><li>Home</li></Link> 
           {auth||login?"":<Link className='Link' to="/login"><li>LogIn</li></Link> }
           {auth||login?"":<Link className='Link' to="/signup"><li>SignUp</li></Link>}  
           <li onClick={()=>clearUser()}>Log Out</li> 
        </div>
        </div>
        </>
    )
}