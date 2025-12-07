'use client';

import { AnimatedContent } from '@/components/reactbits-component';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, TypographyH3 } from '@/components/shadcn-component';
import { SvgDatabase } from '@/data/SvgDatabase';

export function AboutMe() {
  return (
    <AnimatedContent distance={125} direction="vertical" reverse={false} duration={1} ease="power3.out" initialOpacity={0.2} animateOpacity threshold={0.25} delay={0.3}>
      <div className="bg-gray-50 py-6 dark:bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {/* card 1 (About me) */}
            <Card className="relative lg:row-span-2 overflow-hidden">
              <CardHeader className="flex flex-col gap-4">
                <CardTitle>
                  <TypographyH3>About me</TypographyH3>
                </CardTitle>
                <CardDescription>Hello, My name is Muhammad Naufal Irfansyah. I'm from Jember, Indonesia. Nice to meet you all.</CardDescription>
              </CardHeader>
              <CardContent className="@container relative min-h-100 w-full grow max-lg:mx-auto max-lg:max-w-md">
                  <img alt="" src="/my-photo.jpg" className="size-full object-cover object-top grayscale-50 rounded-lg" />
              </CardContent>
            </Card>

            {Object.entries(SvgDatabase).map(([key, { svg, className,title,description }]) => (
              <Card key={key} className={`relative overflow-hidden ${className}`}>
                <CardHeader className="flex flex-col gap-4">
                  <CardTitle><TypographyH3>{title}</TypographyH3></CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className={'@container relative min-h-15 w-full grow max-lg:mx-auto max-lg:max-w-md hidden md:flex'}>{svg}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
}
