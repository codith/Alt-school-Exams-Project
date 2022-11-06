import useCounter from "./useCounter";
import Button from "./Button";

const Counter = () => {
  const { value, increment, decrement, reset, set } = useCounter();

  const handleIncrement = () => {
    increment();
  };
  const handleDecrement = () => {
    decrement();
  };
  const handleReset = () => {
    reset();
  };
  const handleSet = (e) => {
    e.preventDefault();
    set(+e.target.number.value);

    e.target.reset()
  };

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p>{value}</p>
      <div >
        <Button onClick={handleDecrement}>Lower count</Button>
        <Button onClick={handleIncrement}>Add count</Button>
        <Button onClick={handleReset}>Reset count</Button>
      </div>
      <form onSubmit={handleSet} className="form">
        <input
          type="number"
          id="number"
          name="number"
          placeholder="Enter value"
        />
        <button>Set count</button>
      </form>
    </div>
  );
};
export default Counter;


// import React from 'react'
// import useCounter from './useCounter';
// import { Helmet } from "react-helmet-async";



// export default function Counter() {
//     const {count, dispatch, ACTIONS} = useCounter();

//   return (
//     <>
//       <Helmet>
//         <title>Counter page</title>
//         <meta name="description" content="A Page to test Count" />
//         <link rel="canonical" href="/count"/>
//       </Helmet>
      
//       <div className='counter'>
//         <input type="text" placeholder='Enter a value to set'
//         onChange={(e) => dispatch({type : ACTIONS.SET_VALUE,
//         payload : e.target.value})}/>
//         <h1>Counter : {count}</h1>
//         <button onClick={() => {
//           dispatch({type : ACTIONS.INCREASE})
//         }}>Add Count</button>
//         <button onClick={() => {
//           dispatch({type : ACTIONS.DECREASE})
//         }}>Lower Count</button>
//         <button onClick={() => {
//           dispatch({type : ACTIONS.RESET})
//         }}>Reset Count</button>
//       </div>
//     </>
//   )
// }



