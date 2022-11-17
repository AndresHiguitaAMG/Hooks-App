import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quotes } from "../03-examples";

export const Layout = () => {
  const { counter, handleIncrement } = useCounter();
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0]; //Hacemos doble negación porque si se da una sola negación me devulve true, pero si la niego dos veces me devuelve false

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {isLoading ? <LoadingQuote /> : <Quotes quote={quote} author={author} />}
      <button
        disabled={isLoading}
        className="btn btn-primary"
        onClick={() => handleIncrement()}
      >
        Next quote
      </button>
    </>
  );
};

