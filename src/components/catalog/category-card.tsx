import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CatalogCategory } from "@/types/catalog";

import { ItemCard } from "./item-card";

type CategoryCardProps = {
  category: CatalogCategory;
};

const categoryTheme: Record<string, string> = {
  cars: "from-blue-50 to-blue-100",
  bikes: "from-emerald-50 to-emerald-100",
  phones: "from-violet-50 to-violet-100",
  computers: "from-amber-50 to-amber-100",
};

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const themeClass = categoryTheme[category.slug] ?? "from-slate-50 to-slate-100";

  return (
    <Card className={`border bg-linear-to-br py-0 shadow-sm ${themeClass}`}>
      <CardHeader className="pt-5">
        <CardTitle>{category.name}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {category.items.length} item{category.items.length > 1 ? "s" : ""}
        </p>
      </CardHeader>

      <CardContent className="pb-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {category.items.map((item) => (
            <ItemCard key={item.id} item={item} categorySlug={category.slug} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
