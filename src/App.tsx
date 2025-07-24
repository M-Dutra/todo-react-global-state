// import { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import type { TodoInput } from './schema/todoSchema';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store/store';
import { addTodo, removeTodo } from './store/todoSlice';


function App() {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const dispatch = useDispatch<AppDispatch>();

  // const [todos, setTodos] = useState<TodoInput[]>([]);

  // const handleAddTodo = (todo: TodoInput) => {
  //   setTodos((prev) => [todo, ...prev]);
  // };

    const handleAddTodo = (todo: TodoInput) => {
    dispatch(addTodo(todo));
  };

  const handleDelete = (id: string) => {
    dispatch(removeTodo(id));
  }
    // Dispatch an action to remove the todo
    // This function should be defined in the parent component or use Redux to handle the deletion
    // dispatch(removeTodo(id));                


  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Todo Base App</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDelete} />
    </div>
  );
}

export default App;
