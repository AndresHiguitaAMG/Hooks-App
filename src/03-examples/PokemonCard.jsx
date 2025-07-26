import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({name, id, sprites}) => {
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})
  const h2Ref = useRef();
  
  useLayoutEffect(() => {
    const { height, width } = h2Ref.current.getBoundingClientRect();
    setBoxSize({height, width});
  }, [name]);

  return (
    <section style={{height:200, display:"flex", flexDirection:"row"}}>
        <h2 ref={h2Ref} className="text-capitalize">#{id} - {name}</h2>
        {/* Imagenes */}
        <div>
            {
                sprites.map(sprite => {
                    return <img key={sprite} src={sprite} alt="name"/>
                })
            }
        </div>
        <pre>{JSON.stringify(boxSize)}</pre>
    </section>
  )
}
