export type ItemProp = {
  label: string;
  value: string;
};

export type CatalogItem = {
  id: string;
  name: string;
  image: string;
  itemProps: ItemProp[];
};

export type CatalogCategory = {
  slug: string;
  name: string;
  items: CatalogItem[];
};

export type RawCatalogItem = {
  itemname: string;
  category: string;
  image: string;
  itemprops: ItemProp[];
};
