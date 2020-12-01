import { CategoryById } from "./types";

export const selectCategories = (state: any) => state.categories;
export const selectCategoryById = (id: number) => (state: any) => {
  return state.categories.find((category: CategoryById) => category.id === id);
};
