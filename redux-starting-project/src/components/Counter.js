import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const [showCounter,setShowCounter]=useState(false)
  const counter=useSelector(store=>store.counter)
  const dispatch=useDispatch();
  const toggleCounterHandler = () => {
    setShowCounter(prevState=>{
      return !prevState
    })
  };

  const incrementHandler = ()=>{
    dispatch({type:'increment'})
  }
  const decrementHandler= ()=>{
    dispatch({type:'decrement'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      {showCounter && <p className={classes.value}>{counter}</p>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
