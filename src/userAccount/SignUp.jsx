import axios from 'axios';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './signup.css';
import {  useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
export default function SignUp(){
    const navigate=useNavigate();
    ////
    const[resp,setRes]=useState('');
    ////
    const[error,setError]=useState('');
    ////
    const[showError,setShowError]=useState("");
    //form data stored by using useState Hook

    const[gender,setGender]=useState('');
    const[firstName,setName]=useState('');
    const[date,setDate]=useState("");
    const[email,setEmail]=useState('');
    const[userName,setUsername]=useState('');
    const[mobile,setMobile]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPass,setConfirm]=useState('')
    //console.log(gender,firstName,`${date.replaceAll('-',"")}`,email,userName,mobile,password,confirmPass)
    async function signupData() {                                                                  // //
        try {                                                                                     // //
             const response = await axios.post("http://localhost:8080/vigorride/signup", {       // //    
                 salutation: gender,                                                            // //
    firstName: firstName,                                                                      // //
    dob: `${date.replaceAll("-","")}`,                                                        // // 
    email: email,                                                                            // //
    userName: userName,                                                                     // //
    mobileNo: mobile,                                                                      // // 
    password: password,                                                                   // //
    confirmPassword: confirmPass                                                         // //
             }, {                                                                       // //
                 headers: {                                                            // //
                     "Content-Type": "application/json",                              // //
                     'Authorization': 'Bearer',                                      // //
                 }                                                                  // //
             });                                                                   // //
            setRes(response.data.token);                                          // //
             console.log(response.data.token);                                   // //
             localStorage.setItem("user",JSON.stringify(response))              // //
                                                                               // //
                                                                              // //
         }                                                                   // //
         catch (error) {                                                    // //
             setError(error.code);                                         // //
             console.log(error);                                          // //
                                                                         // //
                                                                        // //
         }                                                             // //
         //if user sucessful login navigate to home ,if not it show error
         
        
     }
     //useEffect execute the successSignup function when resp and error state changes
     useEffect(()=>{
     successSignup();
     },[resp,error])
    
     /////////
     useEffect(()=>{
        let user=localStorage.getItem('user');
        let login=localStorage.getItem('login');
        if(user || login){
            navigate("/")
        }
     })
     
   
     //nevigate when signup successfull and if signup not success it throw error
      function successSignup(){  
        let user=localStorage.getItem('user');         //
        try{                             //
        if(user){                  //
            navigate("/");             //
        }                             //
         else if(error!==''){        //   
        setShowError(error);        //
        }                          //
    }                             //
    catch(e){                    //
        console.log(e);         //
    }                          //
     }                        //
     //////////////////////////
      useGSAP(()=>{
        gsap.from("#head",{
            y:2000,
            rotate:360,
            duration:2,
            delay:1
        })
        gsap.from("#pera",{
            y:-2000,
           
            duration:2,
            delay:1
        })
        gsap.from("#portion1",{
            x:-2000,
           
            duration:1,
            delay:0
        })
        gsap.from("#portion2",{
            x:2000,
           
            duration:1,
            delay:0
        })
      })

    return(
        <>
        <div className='signupContainer'>
            <div className='disp'>
        <div className='bkg' id="portion1">
          <h1 id='head'>Vigor Ride</h1>
        </div>
        <div className='formData' id="portion2">

            <p id='pera'>Sign Up</p>
         <div className='grow'>
       <div >
        <div>
        <label>First Name</label>
        </div>
        <input type="text" className="inp" placeholder='First Name' onChange={(e)=>setName(e.target.value)} />
        </div>


        <div >
        <div>
        <label>First Name</label>
        </div>
        <input type="email" className="inp" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        </div>
        <input type="date" name="" id="date" onChange={(e)=>{setDate(e.target.value)}  } />

        <select id="select" onChange={(e)=>setGender(e.target.value)}>
            <option value="M">Male</option>
            <option value="F">Female</option>
        </select>
       
       

        <input type="text" id='username' placeholder='userName' onChange={(e)=>setUsername(e.target.value)} />
        <input type="number"  name="" id="mobile" placeholder='Mobile No.' onChange={(e)=>setMobile(e.target.value)}/>
        <input type="password" name="" id="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <input type="password" name="" id="confirm" placeholder='confirm Password'onChange={(e)=>setConfirm(e.target.value)} />
        <button id="btn" onClick={()=>signupData()}>signup</button>
        <p>{showError}</p>
        </div>
       </div>
        </div>
        </>
    )
}