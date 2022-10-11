import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleOnclick = () => {
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        className="form-control"
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
      />
      <button className="btn btn-primary mt-2" onClick={handleOnclick}>Set focus</button>
    </>
  );
};
