import { useCounter } from "../hooks/useCounter";

export const CounterApp = () => {
  const { counter, increment, reset, decrement } = useCounter();
  return (
    <div className="container w-25 text-center">
      <h1>Contador</h1>
      <h4>{counter}</h4>
      <div className="container">
        <button className="btn btn-primary m-2" onClick={() => increment()}>
          +1
        </button>
        <button className="btn btn-danger m-2" onClick={() => reset()}>
          Reset
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => decrement(1, false)}
        >
          -1
        </button>
      </div>
    </div>
  );
};
