import { TCategory } from "./category.interface";
import { CategoryModel } from "./category.model";

const createCategoryFromDB = (payload: TCategory) => {
    const result = CategoryModel.create(payload);
    return result;
}

export const CategoryService = {
    createCategoryFromDB,
};