"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  Button,
} from "@/components/ui/shadcn/index";

import { Layers } from "lucide-react";
import { COLLECTION_CATEGORIES } from "@/data/collections";

export function CollectionSidebarMobile() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" className="rounded-full shadow-lg">
            <Layers className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="bottom" className="rounded-t-xl px-4 py-12">
          <SheetTitle className="sr-only">Collection Categories</SheetTitle>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {COLLECTION_CATEGORIES.map((cat) => {
              const href = `/collections/${cat.key}`;
              const active = pathname === href;

              return (
                <SheetClose asChild>
                  <Link
                    key={cat.key}
                    href={href}
                    className={`rounded-md border px-3 py-2 text-center text-sm ${
                      active ? "bg-muted font-semibold" : ""
                    }`}
                  >
                    {cat.label}
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
