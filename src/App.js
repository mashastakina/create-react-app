import './App.css';
import XO from './components/XO'
import Counter from './components/Counter'
import Home from './pages/Home'
import Game1 from './pages/Game1'
import Game2 from './pages/Game2'
import Shop from './pages/Shop'

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <NavLink to= "/">Главная</NavLink>
        <NavLink to= "/Game1">Игра 1</NavLink>
        <NavLink to= "/Game2">Игра 2</NavLink>
        <NavLink to= "/Shop">Могаз</NavLink>
      </nav>
      <Routes>
        <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "/Game1" element = {<Game1></Game1>}></Route>
        <Route path = "/Game2" element = {<Game2></Game2>}></Route>
        <Route path = "/Shop" element = {<Shop></Shop>}></Route>

      </Routes>
      </BrowserRouter>
     
      {/* <XO></XO> */}
      {/* <Counter start={10}></Counter> */}
      
    </div>
  );
}

export default App;
