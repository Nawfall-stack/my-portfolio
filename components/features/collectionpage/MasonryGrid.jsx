import Image from "next/image";
import { Card, CardContent } from "@/components/ui/shadcn/index";

export function MasonryGrid({ items }) {
  return (
    <div className="columns-1 gap-6 sm:columns-2 md:columns-3">
      {items.map((item) => (
        <Card key={item.id} className="mb-6 break-inside-avoid">
          <CardContent className="p-4">
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={800}
              className="h-auto w-full rounded-md object-cover"
            />

            <h3 className="mt-3 font-semibold">{item.title}</h3>

            {item.year && (
              <p className="text-sm text-muted-foreground">{item.year}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
