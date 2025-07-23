import { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import type { TodoInput } from './schema/todoSchema';

function App() {
  const [todos, setTodos] = useState<TodoInput[]>([]);

  const handleAddTodo = (todo: TodoInput) => {
    setTodos((prev) => [todo, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Todo Base App</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
