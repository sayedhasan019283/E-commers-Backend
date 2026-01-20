import { TCategory } from "./category.interface";
import { CategoryModel } from "./category.model";

const createCategoryFromDB = (payload: TCategory) => {
    const result = CategoryModel.create(payload);
    return result;
}

const readCategoriesFromDB = async () => {
    const result = await CategoryModel.find();
    return result;
}

const updateCategoryFromDB = async (id: string, payload: Partial<TCategory>) => {
    const result = await CategoryModel.findByIdAndUpdate(id, payload, { new: true });
    return result;
}

const deleteCategoryFromDB = async (id: string) => {
    const result = await CategoryModel.findByIdAndDelete(id);
    return result;
}

const getSingleCategoryFromDB = async (id: string) => {
    const result = await CategoryModel.findById(id);
    return result;
}

export const CategoryService = {
    createCategoryFromDB,
    readCategoriesFromDB,
    updateCategoryFromDB,
    deleteCategoryFromDB,
    getSingleCategoryFromDB
};