import { useState } from "react";
import {useLocation} from 'react-router-dom';
import './reset.css'
import axios from 'axios';
export default function Reset() {
const[user,setuser]=useState('');
const[password,setpassword]=useState('');
const[confirmPass,setconfirm]=useState('');

const location=useLocation();
console.log(location.state.token);
//button click fetch reset api
async function resetPassword(){
   console.log(location.state.token);
    try {
        const response = await axios.post("http://localhost:8080/vigorride/resetpassword", {
            userName:`${user}`,
            password: `${password}`,
            confirmPassword:`${confirmPass}`,
        }, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${location.state.token}`,
            }
        });
       
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
//form default behaviour remove
function reload(e){
 e.preventDefault();
}
    return(
        <>



        
        <form className="form" onSubmit={reload} action="" style={{textAlign:"center"}}>
           <h1>Forgot Password</h1>
            
            <input type="text" onChange={(e)=>setuser(e.target.value)} placeholder="enter user name"/>
            
            
            <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="enter password "/>
          

            <input type="password" onChange={(e)=>setconfirm(e.target.value)} placeholder="confirm password"/>
          
            <button onClick={()=>resetPassword()}>Reset Password</button>
        </form>
        </>
    )
    
}