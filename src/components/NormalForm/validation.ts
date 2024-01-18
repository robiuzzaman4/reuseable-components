import { z } from "zod";

export const FormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be greater then or equal to 2 character" }),
  email: z.string().email().min(1, { message: "Email is required!" }),
  password: z.string().min(8, { message: "Password is too short!" }),
});

export type TNormalForm = z.infer<typeof FormSchema>;
