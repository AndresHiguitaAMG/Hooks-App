// import { useEffect } from "react";
import useForm from '../hooks/useForm';

const SimpleForm = () => {
  const { formState, handleOnChange, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario Con Custom Hook</h1>
      <hr />
      <input
        type={"text"}
        className="form-control"
        placeholder="username"
        name={"username"}
        value={username}
        onChange={handleOnChange}
      />

      <input
        type={"email"}
        className="form-control mt-2"
        placeholder="Contraseña"
        name={"email"}
        value={email}
        onChange={handleOnChange}
      />
      <input
        type={"password"}
        className="form-control mt-2"
        placeholder="example@google.com"
        name={"password"}
        value={password}
        onChange={handleOnChange}
      />
    </>
  );
};

export default SimpleForm;
