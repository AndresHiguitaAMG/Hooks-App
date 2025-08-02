import { screen, render, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem />', (
) => {
    const todo = {
        id: 1,
        description: "Piedra del alma",
        done: false,
    };
    const handleOnDeleteTodoMock = jest.fn();
        const handleOnToggleTodoMock = jest.fn();
        //Hacer un reset de los mocks antes de cada prueba
        beforeEach(() => jest.clearAllMocks);

    test('debe de mostrar el TODO pendiente de completar', () => {
        render(
        <TodoItem 
            todo={todo} handleOnToggleTodo={handleOnToggleTodoMock} 
            handleOnDeleteTodo={handleOnDeleteTodoMock} 
        />);

        const liElement = screen.getByRole("listitem");
        expect(liElement.className).toBe("list-group-item d-flex justify-content-between");

        const spanElement = screen.getByLabelText("span");
        console.log(spanElement.className)
        //Si queremos usar toBe tendriamos que agregar el espacio que esta tiene en el componente.
        // expect(spanElement.className).toBe("align-self-center ")
        // sino entoces se utiliza toContain, pero debemos especificar que solo contenga la propiedad a evaluar.
        expect(spanElement.className).toContain("align-self-center");
        //Podemos usar not.toContain para evaluar que no tenga una clase en especifico, en este caso la clase de "text-decoration-line-through"
        expect(spanElement.className).not.toContain("text-decoration-line-through");
        // screen.debug
    });

    test('debe de mostrar el todo completado', () => {
        todo.done = true;

        render(
        <TodoItem 
            todo={todo} handleOnToggleTodo={handleOnToggleTodoMock} 
            handleOnDeleteTodo={handleOnDeleteTodoMock} 
        />);

        const spanElement = screen.getByLabelText("span");
        expect(spanElement.className).toContain("text-decoration-line-through");
        // screen.debug
    });

    test('el span debe llamar el handleOnToggleTodo cuando se hace click', () => {
        render(
        <TodoItem 
            todo={todo} 
            handleOnToggleTodo={handleOnToggleTodoMock} 
            handleOnDeleteTodo={handleOnDeleteTodoMock} 
        />);

        const spanElement = screen.getByLabelText("span");
        //Simula un click en el span
        fireEvent.click(spanElement);
        expect(handleOnToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('el boton debe llamar el handleOnDeleteTodo', () => {
        render(
        <TodoItem 
            todo={todo} handleOnToggleTodo={handleOnToggleTodoMock} 
            handleOnDeleteTodo={handleOnDeleteTodoMock} 
        />);

        //Mi solución a la tarea
        const buttonElement = screen.getByLabelText("button");
        fireEvent.click(buttonElement);
        expect(handleOnDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
})