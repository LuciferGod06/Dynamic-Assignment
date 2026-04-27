import catalogData from "@/data/catalog.json";
import { CatalogCategory, CatalogItem, RawCatalogItem } from "@/types/catalog";

const rawItems = catalogData as RawCatalogItem[];

const slugify = (value: string): string => {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

const mapItem = (rawItem: RawCatalogItem, index: number): CatalogItem => {
  return {
    id: `${slugify(rawItem.itemname)}-${index + 1}`,
    name: rawItem.itemname,
    image: rawItem.image,
    itemProps: rawItem.itemprops,
  };
};

const buildCategories = (items: RawCatalogItem[]): CatalogCategory[] => {
  const result: CatalogCategory[] = [];

  for (let index = 0; index < items.length; index += 1) {
    const rawItem = items[index];
    const categorySlug = slugify(rawItem.category);
    const item = mapItem(rawItem, index);
    const existingCategory = result.find(
      (category) => category.slug === categorySlug,
    );

    if (existingCategory) {
      existingCategory.items.push(item);
      continue;
    }

    result.push({
      slug: categorySlug,
      name: rawItem.category,
      items: [item],
    });
  }

  return result;
};

const categories = buildCategories(rawItems);

export const getCategories = (): CatalogCategory[] => {
  return categories;
};

export const getCategoryBySlug = (
  categorySlug: string,
): CatalogCategory | undefined => {
  return categories.find((category) => category.slug === categorySlug);
};

export const getItemById = (
  categorySlug: string,
  itemId: string,
): CatalogItem | undefined => {
  const category = getCategoryBySlug(categorySlug);
  return category?.items.find((item) => item.id === itemId);
};
