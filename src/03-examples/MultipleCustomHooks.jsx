import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { counter, handleIncrement, handleDecrement} = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  console.log(data)

  return (
    <>
      <h1>Pokémon</h1>
      <hr />
      {/* Si isLoading es true, se muestra cambiando */}
      {isLoading 
      ? <LoadingMessage />
      : (<PokemonCard 
        name={data.name} 
        id={data.id}
        sprites={[
          data.sprites.front_default,
          data.sprites.front_shiny,
          data.sprites.back_shiny,
        ]}
        />)
      }
      {/* ? Si tenemos data, busca el name  */}
      <pre>{data?.name}</pre>
      {/* En la función de decrement evaluo si es mayor 1 y si lo es vuelve al anterior de lo contrario no hace nada, de esta manera controlo que al llegar a uno, el usuario al intentar presionar back estando en el pokémon 1 el boton no haga y nada y de esa manera tampoco muestre un error */}
      <button className="btn btn-primary mt-2" onClick={() => counter > 1 ? handleDecrement() : null}>Back</button>
      <button className="btn btn-primary mt-2" onClick={() => handleIncrement()}>Next</button>
    </>
  );
};
