import React from 'react';
import { Button, Checkbox, FormControlLabel, FormGroup, List, ListItem, ListItemText, Paper } from '@mui/material';
import type { Todo } from '../store/todoSlice';

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: string) => void; 
  onTodoCompleted: (id: string) => void; 

}

export const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo, onTodoCompleted }) => {
  if (todos.length === 0) {
    return <p>Nenhuma tarefa adicionada.</p>;
  }

  return (
    
    <Paper sx={{ maxWidth: 400 }}>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={todo.title}
              secondary={todo.description}
            />
             <Button
              variant="outlined"
              color="error"
              onClick={() => onDeleteTodo(todo.id)}
              
            >
              Remover
            </Button>
            <FormGroup>
              <FormControlLabel 
                control={<Checkbox color="success" onChange={() =>onTodoCompleted(todo.id)} checked={todo.completed}/>} 
                label="Completed" 
                sx={{ ml: 5 }} 
                
              />
            </FormGroup>
          </ListItem>
          
        ))}
      </List>
    </Paper>
  );
};
