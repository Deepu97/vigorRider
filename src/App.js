import Api from './Api';
import Reset from './Reset';
import './App.css';
import{HashRouter,Route,Routes} from 'react-router-dom';





function App() {

return( 

<>
<HashRouter>
<Routes>
  <Route path="/" element={<Api/>}/>
  <Route path="/resetPassword" element={<Reset/>}/> 
</Routes>

</HashRouter>

</>

   
  );
}

export default App;
