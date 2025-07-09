import { useCounter, useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
  const { counter, handleIncrement, handleDecrement} = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />
      {/* Si isLoading es true, se muestra cambiando */}
      {isLoading && <p>Cargando...</p>}
      {/* ? Si tenemos data, busca el name  */}
      <pre>{data?.name}</pre>
      <button className="btn btn-primary mt-2" onClick={() => handleDecrement()}>Back</button>
      <button className="btn btn-primary mt-2" onClick={() => handleIncrement()}>Next</button>
    </>
  );
};
