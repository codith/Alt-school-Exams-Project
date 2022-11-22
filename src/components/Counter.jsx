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
