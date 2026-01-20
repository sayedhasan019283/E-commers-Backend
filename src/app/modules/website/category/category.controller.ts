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


const readCategories = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
  // Logic to read categories goes here
  const result = await CategoryService.readCategoriesFromDB();
  res.status(200).json({
    success: true,
    message: "Categories retrieved successfully",
    data: result,
  });
});

const updateCategory = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await CategoryService.updateCategoryFromDB(id, payload);
  res.status(200).json({
    success: true,
    message: "Category updated successfully",
    data: result,
  });
});

const deleteCategory = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
  const id = req.params.id;
  const result = await CategoryService.deleteCategoryFromDB(id);
  res.status(200).json({
    success: true,
    message: "Category deleted successfully",
    data: result,
  });
});

const getSingleCategory = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
  const id = req.params.id;
  const result = await CategoryService.getSingleCategoryFromDB(id);
  res.status(200).json({
    success: true,
    message: "Category retrieved successfully",
    data: result,
  });
});

export const CategoryController = {
   createCategory,
   readCategories,
    updateCategory,
    deleteCategory,
    getSingleCategory
};
