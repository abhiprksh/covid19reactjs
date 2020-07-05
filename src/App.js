import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.logged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>counter : {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())} > -</button>
      {logged ? 'Logged In' : 'Not Logged'}
      <button onClick={() => dispatch(login())}>{logged ? 'LogOut' : 'LogIn'}</button>
    </div>
  );
}

export default App;
