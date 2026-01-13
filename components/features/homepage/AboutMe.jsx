"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  TypographyH3,
} from "@/components/ui/shadcn/index";
import Image from "next/image";
import { SvgDatabase } from "@/data/SvgDatabase";

export function AboutMe() {
  return (
    <div className="bg-gray-50 dark:bg-background">
      <div className="w-full max-w-6xl px-4 md:px-6 mx-auto py-12">
        <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* card 1 (About me) */}
          <Card className="relative lg:row-span-2 overflow-hidden">
            <CardHeader className="flex flex-col gap-4">
              <CardTitle>
                <TypographyH3>About me</TypographyH3>
              </CardTitle>
              <CardDescription>
                Hello, My name is Muhammad Naufal Irfansyah. I'm from Jember,
                Indonesia. Nice to meet you all.
              </CardDescription>
            </CardHeader>
            <CardContent className="@container relative min-h-100 w-full grow max-lg:mx-auto max-lg:max-w-md ">
              <Image
                src="/my-photo.jpg"
                alt="My Photo"
                width={800} // sesuaikan ukuran asli / container
                height={600} // sesuaikan proporsinya
                className="w-full h-full object-cover object-top grayscale-50 rounded-lg border shadow-xl"
                priority // optional: langsung load (misal hero image)
              />{" "}
            </CardContent>
          </Card>

          {Object.entries(SvgDatabase).map(
            ([key, { svg, className, title, description }]) => (
              <Card
                key={key}
                className={`relative overflow-hidden ${className}`}
              >
                <CardHeader className="flex flex-col gap-4">
                  <CardTitle>
                    <TypographyH3>{title}</TypographyH3>
                  </CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent
                  className={
                    "@container relative min-h-15 w-full grow max-lg:mx-auto max-lg:max-w-md hidden lg:flex"
                  }
                >
                  {svg}
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
