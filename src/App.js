import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Cart from './components/Cart/Cart'



function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
