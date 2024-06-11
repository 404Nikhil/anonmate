import {z} from 'zod';
export const signInSchema = z.object({
    username: z.string().min(4, "Username must be atleast 4 char").max(20),
    password: z.string().min(6,{message: "Password must be atleast 6 char"}),
})