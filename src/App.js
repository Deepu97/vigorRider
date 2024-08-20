import Login from './userAccount/Login';
import Reset from './userAccount/Reset';
import HomePage from "./userAccount/HomePage";

import './App.css';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import SignUp from './userAccount/SignUp';

import PrivatePages from './userAccount/PrivatePages';






function App() {

return( 
 

<>

<BrowserRouter>
<Routes>
  <Route element={<PrivatePages/>} > 
  <Route path="/" element={<HomePage/>}/>

  <Route path="/resetPassword" element={<Reset/>}/> 
  </Route>
  <Route path="/signup" element={<SignUp/>}/> 
  <Route path="/login" element={<Login/>}/>
  
</Routes>

</BrowserRouter>

</>

   
  );
}

export default App;
