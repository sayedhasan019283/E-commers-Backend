import express from "express";
import validateRequest from "../../../middlewares/validateRequest";
import { CategoryValidation } from "./category.validation";
import { CategoryController } from "./category.controller";

const router = express.Router();

router.get(
    "/categories",
    validateRequest(CategoryValidation.createCategorySchema),
    CategoryController.createCategory,
)

export const CategoryRoutes = router;