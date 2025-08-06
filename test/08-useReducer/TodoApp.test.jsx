import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos")

describe('Peruebas en el <TodoApp />', () => {
    useTodos.mockReturnValue({
        todos: [{
            id: 1,
            description: "Ir a mercar",
            done: false
        },
        {
            id: 2,
            description: "Visitar a mi novia",
            done: true
        }],
        handleOnNewTodo: jest.fn(), handleOnDeleteTodo: jest.fn(), handleOnToggleTodo: jest.fn(), todosCount: 2, 
        pendingTodosCount: 1,
    });  

    test('debe mostrar el componente correctamente', () => {
        render(<TodoApp />);
        expect(screen.getByText("Ir a mercar")).toBeTruthy();
        expect(screen.getByText("Visitar a mi novia")).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();
    });
});