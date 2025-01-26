import data from "../data.json";

export type Category = keyof typeof data.categories;

export type CategoryItem = (typeof data.categories)[Category][number];
export type Categories = Record<Category, Array<CategoryItem>>;
