import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
}

interface TodosState {
    todos: Todo[];
}

const initialState: TodosState = {
    todos: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{ title: string; description?: string }>) => {
            const newTodo: Todo = {
                id: crypto.randomUUID(),
                completed: false,
                ...action.payload,
            };
            state.todos.push(newTodo);
        },
         removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;