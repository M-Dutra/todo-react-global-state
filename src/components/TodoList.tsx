import React from 'react';
import type { TodoInput } from '../schema/todoSchema';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

interface TodoListProps {
  todos: TodoInput[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
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
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
