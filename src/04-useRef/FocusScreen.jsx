import { useRef } from "react";

export const FocusScreen = () => {
  const ref = useRef();
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        className="form-control"
        type="text"
        placeholder="Ingrese su nombre"
      />
      <button className="btn btn-primary mt-2">Set focus</button>
    </>
  );
};
