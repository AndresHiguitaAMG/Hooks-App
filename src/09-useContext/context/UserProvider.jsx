import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     email: "andres@avedmusic.com",
//     id: 468,
//     name: "Andrés",

// }

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{user: user}}>
    <UserContext.Provider value={{user, setUser}}>

        {children}
    </UserContext.Provider>
    //Con este quiero proveer toda la información que este UseContext va a proporcionarle al arbol de nuestros componentes
  )
}
