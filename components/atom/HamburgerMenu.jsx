"use client"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/shadcn-component';
import { ModeToggle } from '@/components/atom-component';
import { Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export function HamburgerMenu() {
  const [rotated, setRotated] = useState(false);
  return (
    <Sheet>
      <div className="flex gap-4 ">
        <ModeToggle></ModeToggle>
        <SheetTrigger>
          <Menu></Menu>
        </SheetTrigger>
      </div>
      <SheetContent className="w-9/10 px-6">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-4 text-2xl">
          {/* Dropdown/Collapsible untuk menu dengan sub-link */}
          <Collapsible onOpenChange={(open) => setRotated(open)}>
            <CollapsibleTrigger className="flex justify-between items-end gap-4">
              <div>Components</div>
              <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${rotated ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 flex flex-col gap-2 m-4 ">
              <Link href="/components/button">Button</Link>
              <Link href="/components/card">Card</Link>
              <Link href="/components/modal">Modal</Link>
            </CollapsibleContent>
          </Collapsible>

          <Link href="/#">Home</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
