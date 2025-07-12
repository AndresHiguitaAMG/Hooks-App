import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/index";

export const TodoApp = () => {
  const { todos, handleOnNewTodo, handleOnDeleteTodo, handleOnToggleTodo, todosCount, pendingTodosCount } = useTodos();
 
  return (
    <>
        <h1>TodoApp</h1>
        <h2>Tareas: {todosCount}, Tareas Pendientes: <small>{pendingTodosCount}</small></h2>
        <hr />
        <div className="row">
          <div className="col-7">
            <TodoList 
              todos={todos} 
              handleOnDeleteTodo={handleOnDeleteTodo} 
              handleOnToggleTodo={handleOnToggleTodo}
            />
          </div>
          <div className="col-5">
            <h4>Agregar Todo</h4>
            <hr />
            <TodoAdd handleOnNewTodo={handleOnNewTodo} />
          </div>
        </div>
    </>
  )
};
