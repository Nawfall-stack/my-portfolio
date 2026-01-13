import { notFound } from "next/navigation";
import {
  MasonryGrid,
  CollectionHeader,
} from "@/components/features/collectionpage";
import { COLLECTIONS, CATEGORY_META } from "@/data/collections";

export default function CollectionCategoryPage({ params }) {
  const { category } = params;

  const items = COLLECTIONS[category];
  const meta = CATEGORY_META[category];

  if (!items || !meta) notFound();

  return (
    <>
      <CollectionHeader title={meta.title} description={meta.description} />
      <MasonryGrid items={items} />
    </>
  );
}
