import { z } from 'zod';

export const todoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
}); 

export type TodoInput = z.infer<typeof todoSchema>;
