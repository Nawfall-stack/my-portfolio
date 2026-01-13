"use client";

import { RotatingText } from "@/components/ui/reactbits/index";
import {
  Badge,
  TypographyP,
  TypographyH1,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/index";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-14">
      <Badge className="py-1 px-4 text-base rounded-2xl" variant="outline">
        Welcome to My Website Portfolio
      </Badge>
      <TypographyH1>Hello there, I'm a</TypographyH1>
      <RotatingText
        texts={[
          "Front End Developer",
          "UI/UX Designer",
          "Graphic Designer",
          "Logo Designer",
        ]}
        mainClassName="px-2 sm:px-2 md:px-3 overflow-hidden justify-center -mt-4 rounded-sm text-foreground text-center leading-tighter text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={3000}
      />
      <TypographyP className={"xl:max-w-xl"}>
        A creative mind passionate about design, code, and crafting seamless
        user experiences.
      </TypographyP>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg">
          <Link href="/viacontact">Let's Work Together</Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="lg"
              variant="outline"
              className="flex items-center gap-1 [&[data-state=open]_svg]:rotate-180"
            >
              Download
              <ChevronDownIcon className="size-4 transition-transform" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-[var(--radix-dropdown-menu-trigger-width)]">
            <DropdownMenuItem asChild>
              <Link href="/portfolio.pdf" download>
                Design Portfolio (PDF)
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/resume.pdf" download>
                Resume (PDF)
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
