import { TodoItem } from "./TodoItem";

export const TodoList = ({todos = [], handleOnDeleteTodo, handleOnToggleTodo}) => {

  return (
    <ul className="list-group">
      {
        todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            handleOnDeleteTodo={handleOnDeleteTodo}
            handleOnToggleTodo ={handleOnToggleTodo}       
          />
        ))
      }
    </ul>
  );
}
