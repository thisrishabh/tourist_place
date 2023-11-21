
import './App.css'
import Navbar from './Components/Navbar'
import India from './Components/pages/India'
import States from './Components/pages/States'
import About from './Components/pages/About'
import Details from './Components/pages/Details'
import Karnataka from './Components/pages/Karnataka'

import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
     <Route exact path="/" element={<India />}></Route>
      <Route exact path="/states" element={<States />}></Route>
      <Route  exact path="/about" element={<About/>}></Route>
      <Route  exact path="/states/karnataka" element={<Karnataka />}></Route>
      <Route exact path="/states/:state/:place" element={<Details/>}></Route>
   
     </Routes>
        
    </>
  );
};

export default App;
