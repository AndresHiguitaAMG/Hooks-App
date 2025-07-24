import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import NavBar from "./NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (

    //Como ahora toda mi aplicación se encuentra enmarcada por el UserProvider, todos los elementos, componentes y sub componentes que esten dentro pueden ver el UserProvider y obtener la información que se ha configurado.
    <UserProvider>
      <h1>MainApp</h1>
      <NavBar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="/*" element={<Navigate to="/"/>} />
        {/* <Route path="/*" element={<LoginPage />} /> */}
      </Routes>
    </UserProvider>
  );
};
