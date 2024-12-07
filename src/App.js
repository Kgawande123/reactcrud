import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import Register from './Pages/Register';
import About from './Pages/About';
import Show from './Pages/Show.js';

import Error from './Pages/Error.js';
import Update from './Pages/Update.js';
import Delete from './Pages/Delete.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Show' element={<Show/>}></Route>
        <Route path='*' element={<Error/>}></Route>
        <Route path='/Update/:clientID' element={<Update/>}></Route>
        <Route path='/Delete/:clientID' element={<Delete/>}></Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
