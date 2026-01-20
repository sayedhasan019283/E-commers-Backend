import { z } from "zod";

 const createCategorySchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(2, "Category name must be at least 2 characters"),
    isActive: z.boolean().optional(),
  }),
});

 const updateCategorySchema = z.object({
  body: z.object({
    name: z.string().min(2).optional(),
    isActive: z.boolean().optional(),
  }),
});

export const CategoryValidation = {
  createCategorySchema,
  updateCategorySchema,
};