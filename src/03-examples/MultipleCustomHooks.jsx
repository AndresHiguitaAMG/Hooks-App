import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";

const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://www.breakingbadapi.com/api/quotes/1"
  );
  console.log(data)
  const { author, quote } = !!data && data[0]; //Hacemos doble negación porque si se da una sola negación me devulve true, pero si la niego dos veces me devuelve false
  const { handleIncrement } = useCounter();

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={() => handleIncrement(...data)}>Next quote</button>
    </>
  );
};

export default MultipleCustomHooks;
