"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/shadcn/index";

export function ComingSoonPage() {
  return (
    <div className="flex min-h-screen items-center justify-center  px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl rounded-2xl border bg-card p-8 text-center shadow-xl"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Coming Soon</h1>
        <p className="mb-6 text-muted-foreground">
          This website is currently under development. We’re preparing something
          awesome for you.
        </p>

        <div className="mb-8 flex items-center justify-center gap-3 text-sm">
          <span className="rounded-full bg-muted px-4 py-2">Design</span>
          <span className="rounded-full bg-muted px-4 py-2">Development</span>
          <span className="rounded-full bg-muted px-4 py-2">Launch</span>
        </div>

        <div>
          <Button asChild variant="outline">
            <Link href="/">← Back To Home</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
