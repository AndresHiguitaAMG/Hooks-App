import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || []
};

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    
    const handleOnNewTodo = (todo) => {
        const action = {
            type: "ADD_TODO",
            payload: todo,
        }
        dispatch(action);
    };
    
    const handleOnDeleteTodo = (id) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: id,
        });
    };
    
    const handleOnToggleTodo = (id) => {
        dispatch({
            type: "TOGGLE_TODO",
            payload: id,
        });
    };

    const todosCount = todos.length;
    
    const pendingTodosCount = todos.filter(todo => !todo.done).length;
  
  
    return {
        todos,
        handleOnNewTodo,
        handleOnDeleteTodo,
        handleOnToggleTodo,
        todosCount,
        pendingTodosCount,
  };
};
