import react from 'react';
import { Navigate, Outlet } from "react-router-dom";
export default function PrivatePages(props) {
  const auth = localStorage.getItem("user");
  const login=localStorage.getItem("login")
  return (
    <>
   { auth||login?<Outlet/> : <Navigate to="/login" />}
  
    </>
  )

  
  
}
