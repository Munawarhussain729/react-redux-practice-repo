import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Routes>
          <Route path='/home' exact element={<Home />} />
          <Route path='/cart' exact element={<Cart />} />

        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
