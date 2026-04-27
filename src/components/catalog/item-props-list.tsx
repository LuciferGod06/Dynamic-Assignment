import { ItemProp } from "@/types/catalog";

type ItemPropsListProps = {
  itemProps: ItemProp[];
};

export const ItemPropsList = ({ itemProps }: ItemPropsListProps) => {
  return (
    <div className="grid gap-3">
      {itemProps.map((itemProp) => (
        <div
          key={itemProp.label}
          className="flex items-center justify-between rounded-lg border bg-muted/40 px-3 py-2"
        >
          <span className="text-sm font-medium">{itemProp.label}</span>
          <span className="text-sm text-muted-foreground">{itemProp.value}</span>
        </div>
      ))}
    </div>
  );
};
