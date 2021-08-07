import { useState,Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter=useSelector(store=>store.counter)
  const toggle=useSelector(state=>state.toggle)
  const dispatch=useDispatch();
  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  const incrementHandler = ()=>{
    dispatch({type:'increment'})
  }
  const decrementHandler= ()=>{
    dispatch({type:'decrement'})
  }
  const incrementHandler_5 = ()=>{
    dispatch({type:'increment_5',value:5})
  }
  const decrementHandler_5= ()=>{
    dispatch({type:'decrement_5',value:5})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      {toggle && <p className={classes.value}>{counter}</p>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler_5}>Increment_5</button>
        <button onClick={decrementHandler_5}>Decrement_5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component{
//   incrementHandler(){
//     this.props.increment();
//   }
//   decrementHandler(){
//     this.props.decrement();
//   }
//   incrementHandler_5(){
//     this.props.increment_5();
//   }
//   decrementHandler_5(){
//     this.props.decrement_5();
//   }
//   toggleCounterHandler() {
//     this.props.showCounter();
//   };
//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>-- COUNTER VALUE --</div>
//         {this.props.toggle && <p className={classes.value}>{this.props.counter}</p>}
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//           <button onClick={this.incrementHandler_5.bind(this)}>Increment_5</button>
//           <button onClick={this.decrementHandler_5.bind(this)}>Decrement_5</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps=state=>{
//   return {
//     counter:state.counter,
//     toggle:state.toggle
//   }
// }
// const mapDipatchToProps= dispatch=>{
//   return {
//     increment:()=>dispatch({type:'increment'}),
//     decrement:()=>dispatch({type:'decrement'}),
//     increment_5:()=>dispatch({type:'increment_5'}),
//     decrement_5:()=>dispatch({type:'decrement_5'}),
//     showCounter:()=>dispatch({type:'toggle'})
//   }
// }


export default Counter;
// export default connect(mapStateToProps,mapDipatchToProps)(Counter);
