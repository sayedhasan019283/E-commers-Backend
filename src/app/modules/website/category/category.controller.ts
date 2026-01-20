import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../../shared/catchAsync";
import { CategoryService } from "./category.service";


const createCategory = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
  const payload = req.body;
  // Logic to create a category goes here   
  const result = await CategoryService.createCategoryFromDB(payload);
  res.status(201).json({
    success: true,
    message: "Category created successfully",
    data: result,
  });
});

export const CategoryController = {
   createCategory,
};
