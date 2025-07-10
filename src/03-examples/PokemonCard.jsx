export const PokemonCard = ({name, id, sprites}) => {
  return (
    <section style={{height:200}}>
        <h2 className="text-capitalize">{name} - {id}</h2>
        {/* Imagenes */}
        <div>
            {
                sprites.map(sprite => {
                    return <img key={sprite} src={sprite} alt="name"/>
                })
            }
        </div>
    </section>
  )
}
