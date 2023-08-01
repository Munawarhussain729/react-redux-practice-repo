import './App.css';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import{BrowserRouter, Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home />
   |<Routes>

    <Route path='/cart'  element={<Cart/>}/>
    <Route path='/' element={<Home/>}/>
   </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
