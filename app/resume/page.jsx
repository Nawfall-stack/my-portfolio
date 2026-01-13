"use client";

import { Button } from "@/components/ui/shadcn/index";
import { Download, Printer } from "lucide-react";
import { AnimatedContent } from "@/components/ui/reactbits/index";

export default function ResumePage() {
  const resumeUrl = "/resume.pdf";

  return (
    <AnimatedContent
      distance={125}
      direction="vertical"
      reverse={false}
      duration={1.5}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      threshold={0.2}
      delay={0.3}
    >
      <div className="container mx-auto max-w-5xl px-4 py-10">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Resume</h1>

          <div className="flex gap-2">
            {/* Download */}
            <Button asChild variant="outline">
              <a href={resumeUrl} download>
                <Download className="mr-2 h-4 w-4" />
                Download
              </a>
            </Button>

            {/* Print */}
            <Button variant="outline" onClick={() => window.print()}>
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
          </div>
        </div>

        {/* PDF Preview */}

        <div className="overflow-hidden rounded-xl border"></div>
        <iframe
          src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="h-[80vh] w-full rounded-xl border"
        />
      </div>
    </AnimatedContent>
  );
}
