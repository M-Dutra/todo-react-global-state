import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema, type TodoInput } from "../schema/todoSchema";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";

interface TodoFormProps {
  onAddTodo: (data: TodoInput) => void;
};

export const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
    const { register, handleSubmit, formState: {errors}, reset} = useForm<TodoInput>({
        resolver: zodResolver(todoSchema),
    });

    const onSubmit = (data: TodoInput) => {
        console.log("submiting the data", data);
        onAddTodo(data);
        reset();
    }

    return (
        <>

            <Box 
                component="form" 
                sx={{ p: 2, border: '1px dashed grey' }}
                onSubmit={handleSubmit(onSubmit)} 
                >
                <TextField 
                    label="Title" // MUI
                    {...register('title')} // React Hook Form integration
                    required  // HTML: marca como campo obrigatório (mas o Zod é quem valida)
                    error= {!!errors.title} // MUI: exibe erro se houver
                    helperText={errors.title?.message} // MUI: exibe mensagem de erro do
                />
                <TextField 
                    label="Description" // MUI
                    {...register('description')} // React Hook Form integration
                    required  // HTML: marca como campo obrigatório (mas o Zod é quem valida)
                    error= {!!errors.description} // MUI: exibe erro se houver
                    helperText={errors.description?.message} // MUI: exibe mensagem de erro do
                    multiline
                    rows={3}
                />
                <Button variant="contained" type="submit">Adicionar Tarefa</Button>

            </Box>
        </>

    );   
}