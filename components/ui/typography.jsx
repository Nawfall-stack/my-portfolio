import { cn } from '@/lib/utils'; // helper untuk gabung className (kalau kamu pakai shadcn)

export function TypographyH1({ children, className }) {
  return <h1 className={cn('text-foreground leading-tighter text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl', className)}>{children}</h1>;
}

export function TypographyH2({ children, className }) {
  return <h2 className={cn('scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}>{children}</h2>;
}

export function TypographyH3({ children, className }) {
  return <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>{children}</h3>;
}

export function TypographyP({ children, className }) {
  return <p className={cn('text-foreground text-center max-w-2xl text-base text-balance xs:text-lg', className)}>{children}</p>;
}

export function TypographySmall({ children, className }) {
  return <small className={cn('text-sm font-medium leading-none', className)}>{children}</small>;
}
