import { CategoryCard } from "@/components/catalog/category-card";
import { getCategories } from "@/lib/catalog";

const HomePage = () => {
  const categories = getCategories();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Dynamic Multi-Category Catalog
        </h1>
        <p className="text-muted-foreground">
          Explore items by category and open any card to view full details.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
