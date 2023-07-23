import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrementExperience, incrementExperience } from './redux/actions';

function App() {
  const state = useSelector(state => state.amount)
  const dispatch = useDispatch()
  return (
    <div className="App">
    <div>
      <h1>Welcome to Learners world </h1>
      <div className='experience'>
        <button className='btn' onClick={()=>dispatch(decrementExperience(1))}>-</button>
        <p>{state} month</p>
        <button className='btn' onClick={()=>dispatch(incrementExperience(1))}>+</button>
      </div>
    </div>
    </div>
  );
}

export default App;
