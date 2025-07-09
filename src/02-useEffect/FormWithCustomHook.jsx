import { useForm } from "../hooks";


export const FormWithCustomHook = () => {
  const { formState, handleResetForm, handleOnChange, username, email, password } = useForm({
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
        placeholder="example@google.com"
        name={"email"}
        value={email}
        onChange={handleOnChange}
      />
      <input
        type={"password"}
        className="form-control mt-2"
        placeholder="contraseña"
        name={"password"}
        value={password}
        onChange={handleOnChange}
      />
      <button onClick={handleResetForm} className="btn btn-primary mt-2">Borrar</button>
    </>
  );
};
