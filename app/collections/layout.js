import {
  CollectionSidebar,
  CollectionSidebarMobile,
} from "@/components/features/collectionpage";

export default function CollectionsLayout({ children }) {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-10">
      <div className="flex gap-10">
        <CollectionSidebar />
        <main className="flex-1">{children}</main>
      </div>

      <CollectionSidebarMobile />
    </div>
  );
}
