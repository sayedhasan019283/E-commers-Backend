import express from "express";
import validateRequest from "../../../middlewares/validateRequest";
import { CategoryValidation } from "./category.validation";
import { CategoryController } from "./category.controller";
import auth from "../../../middlewares/auth";


const router = express.Router();

router.post(
    "/create",
    auth("admin"),
    validateRequest(CategoryValidation.createCategorySchema),
    CategoryController.createCategory,
)

router.get(
    "/get-all",
    auth("admin"),
    CategoryController.readCategories,
)

router.patch(
    "/:id",
    auth("admin"),
    validateRequest(CategoryValidation.updateCategorySchema),
    CategoryController.updateCategory,
)

router.delete(
    "/:id",
    auth("admin"),
    CategoryController.deleteCategory,
);

export const CategoryRoutes = router;