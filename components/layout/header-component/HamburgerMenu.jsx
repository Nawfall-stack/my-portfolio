"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/shadcn/index";
import { ModeToggle } from "@/components/layout/header-component/index";
import { Menu } from "lucide-react";
import Link from "next/link";

const MENU = [
  {
    title: "Home",
    items: [
      { label: "Introduction", href: "/#" },
      { label: "Tech Stack", href: "/#tech-stack" },
      { label: "Featured Project", href: "/#featured-project" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Contact Us", href: "/#contact-us" },
    ],
  },
  {
    title: "collections",
    items: [
      {
        label: "Logo",
        href: "/collections/logo",
      },
      {
        label: "Poster",
        href: "/collections/poster",
      },
      {
        label: "Thumbnail",
        href: "/collections/thumbnail",
      },
      {
        label: "Font",
        href: "/collections/font",
      },
      {
        label: "Social Media",
        href: "/collections/socmed",
      },
      {
        label: "Illustration",
        href: "/collections/illustration",
      },
    ],
  },
  {
    title: "Showcase",
    items: [
      { label: "Personal Branding", href: "/showcase" },
      { label: "UI/UX Design", href: "/showcase" },
      { label: "Website Project", href: "/showcase" },
    ],
  },
  {
    title: "Social",
    items: [
      { label: "GitHub", href: "https://github.com/Nawfall-stack" },
      { label: "Instagram", href: "https://www.instagram.com/naw_fall9104/" },
      { label: "Dribbble", href: "https://Dribbble.com" },
      { label: "LinkedIn", href: "https://LinkedIn.com" },
    ],
  },
  {
    title: "Others",
    items: [
      { label: "Article", href: "/article" },
      { label: "Resume/CV", href: "/resume" },
    ],
  },
];

export function HamburgerMenu() {
  return (
    <Sheet>
      <div className="flex gap-4">
        <ModeToggle />
        <SheetTrigger aria-label="Open menu">
          <Menu />
        </SheetTrigger>
      </div>

      <SheetContent className="px-6 h-[100dvh] flex flex-col">
        <SheetHeader>
          <SheetTitle />
        </SheetHeader>

        <nav className="mt-8 flex flex-col gap-10 flex-1 overflow-y-auto pb-10">
          {MENU.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <span className="text-sm uppercase text-muted-foreground tracking-wide">
                {section.title}
              </span>

              <div className="flex flex-col gap-2 text-2xl font-medium">
                {section.items.map((item) => (
                  <SheetClose asChild key={`${section.title}-${item.label}`}>
                    <Link href={item.href}>{item.label}</Link>
                  </SheetClose>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
