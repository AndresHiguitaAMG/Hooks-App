import useFetch from '../hooks/useFetch';

const MultipleCustomHooks = () => {
  const {data, isLoading, hasError} = useFetch("https://www.breakingbadapi.com/api/quotes/1");

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
    </>
  );
};

export default MultipleCustomHooks;
