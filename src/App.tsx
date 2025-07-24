// import { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import type { TodoInput } from './schema/todoSchema';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store/store';
import { addTodo, markAsCompleted, removeTodo } from './store/todoSlice';
import { Button, Stack } from '@mui/material';
import { useState } from 'react';

type Filter = "all" | "completed" | "incomplete";

function App() {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const dispatch = useDispatch<AppDispatch>();

  const [filter, setFilter] = useState<Filter>("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true; 
  });

  const handleAddTodo = (todo: TodoInput) => {
    dispatch(addTodo(todo));
  };

  const handleDelete = (id: string) => {
    dispatch(removeTodo(id));
  }

  const handleTodoCompleted = (id: string) => {
    dispatch(markAsCompleted(id));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Todo Base App</h1>
      <TodoForm onAddTodo={handleAddTodo} />
       <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 5}}>
        <Button
          variant={filter === "all" ? "contained" : "outlined"}
          onClick={() => setFilter("all")}
        >
          Todas
        </Button>
        <Button
          variant={filter === "completed" ? "contained" : "outlined"}
          onClick={() => setFilter("completed")}
        >
          Completas
        </Button>
        <Button
          variant={filter === "incomplete" ? "contained" : "outlined"}
          onClick={() => setFilter("incomplete")}
        >
          Incompletas
        </Button>
      </Stack>
      <TodoList todos={filteredTodos} onDeleteTodo={handleDelete} onTodoCompleted={handleTodoCompleted} />
    </div>
  );
}

export default App;
