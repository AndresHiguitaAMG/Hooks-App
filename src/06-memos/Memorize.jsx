import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, handleIncrement } = useCounter(10);
  return (
    <>
      <h1>Counter: <Small value={counter} /></h1>
      <hr />
      <button 
      className="btn btn-primary"
      onClick={() => handleIncrement()}
      >+ 1</button>
    </>
  )
}
