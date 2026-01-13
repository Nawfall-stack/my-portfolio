"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { COLLECTION_CATEGORIES } from "@/data/collections";
import clsx from "clsx";

export function CollectionSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block w-56">
      <div className="sticky top-24">
        <p className="mb-4 text-sm font-semibold text-muted-foreground">
          Categories
        </p>

        <nav className="flex flex-col gap-1">
          {COLLECTION_CATEGORIES.map((cat) => {
            const href = `/collections/${cat.key}`;
            const active = pathname === href;

            return (
              <Link
                key={cat.key}
                href={href}
                className={clsx(
                  "rounded-md px-3 py-2 text-sm transition",
                  active ? "bg-muted font-semibold" : "hover:bg-muted/60",
                )}
              >
                {cat.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
