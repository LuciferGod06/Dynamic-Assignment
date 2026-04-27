import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ItemPropsList } from "@/components/catalog/item-props-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCategoryBySlug, getItemById } from "@/lib/catalog";
import { ArrowLeftIcon } from "lucide-react";

type ItemDetailPageProps = {
  params: Promise<{
    category: string;
    itemId: string;
  }>;
};

const ItemDetailPage = async ({ params }: ItemDetailPageProps) => {
  const { category, itemId } = await params;
  const categoryData = getCategoryBySlug(category);
  const item = getItemById(category, itemId);

  if (!categoryData || !item) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-6 inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors hover:bg-muted"
      >
        <ArrowLeftIcon className="size-5" />
        Back to Categories
      </Link>

      <Card className="overflow-hidden border py-0">
        <div className="relative h-90 w-full bg-linear-to-br from-neutral-900 via-slate-800 to-neutral-950 sm:h-90">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain"
            priority
          />
        </div>

        <CardHeader>
          <p className="text-sm font-medium text-primary">
            Category: {categoryData.name}
          </p>
          <CardTitle className="text-2xl">{item.name}</CardTitle>
        </CardHeader>

        <CardContent className="pb-6">
          <ItemPropsList itemProps={item.itemProps} />
        </CardContent>
      </Card>
    </main>
  );
};

export default ItemDetailPage;
