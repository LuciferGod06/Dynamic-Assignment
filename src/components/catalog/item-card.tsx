import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { CatalogItem } from "@/types/catalog";
import { InfoIcon } from "lucide-react";

type ItemCardProps = {
  item: CatalogItem;
  categorySlug: string;
};

export const ItemCard = ({ item, categorySlug }: ItemCardProps) => {
  return (
    <Card className="h-full overflow-hidden border bg-card/90 py-0">
      <div className="relative h-36 w-full sm:h-40">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      <CardContent className="pt-4">
        <CardTitle className="text-sm sm:text-base">{item.name}</CardTitle>
      </CardContent>

      <CardFooter className="border-t bg-muted/40">
        <Link
          href={`/items/${categorySlug}/${item.id}`}
          className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <InfoIcon className="size-4" />
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};
