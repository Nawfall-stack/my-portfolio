import Link from "next/link";
import { TypographyH1, TypographyP } from "@/components/ui/shadcn/index";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* background blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <TypographyH1 className="text-8xl font-bold tracking-tight">
        404
      </TypographyH1>

      <TypographyP className="max-w-md text-muted-foreground">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </TypographyP>

      <Link
        href="/"
        className="group mt-6 inline-flex items-center gap-2 rounded-md border px-5 py-2 text-sm font-medium transition hover:bg-muted"
      >
        <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
        Back to Home
      </Link>
    </div>
  );
}
