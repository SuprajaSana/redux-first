import { useSelector,useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {

  const dispatch=useDispatch()

  const counter = useSelector(state => state.counter)
  
  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }

  const decremnetHandler = () => {
    dispatch({type:'decrement'})
  }

  const incrementbyfiveHandler = () => {
    dispatch({type:'incrementbyfive',amount:5})
  }

  const decrementbyfiveHandler = () => {
    dispatch({type:'decrementbyfive',amount:5})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementbyfiveHandler}>Increment by 5</button>
        <button onClick={decrementbyfiveHandler}>Decrement by 5</button>
        <button onClick={decremnetHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
