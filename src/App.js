import Api from './Api';
import Reset from './Reset';
import './App.css';
import{BrowserRouter,Route,Routes} from 'react-router-dom';





function App() {

return( 

<>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Api/>}/>
  <Route path="/resetPassword" element={<Reset/>}/> 
</Routes>

</BrowserRouter>

</>

   
  );
}

export default App;
