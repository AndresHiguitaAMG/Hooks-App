import { useForm } from "../hooks/useForm";

export const TodoAdd = ({handleOnNewTodo}) => {

const { description, handleOnChange, handleResetForm } = useForm({
    description: "",
});

const handleOnSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
        id: new Date().getTime(),
        done: false,
        description,
    };
    handleOnNewTodo(newTodo);

    handleResetForm();
};    
    

return (
    <form onSubmit={handleOnSubmit}>
        <input
            type="text"
            placeholder="¿qué hay que hacer?"
            className="form-control"
            name="description"
            value={description}
            onChange={handleOnChange}
        />
        <button
            type="submit"
            className="btn btn-outline-primary mt-1"
        >Agregar</button>
    </form>
  )
}
