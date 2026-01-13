import { TypographyH1 } from "@/components/ui/shadcn/index";

export function CollectionHeader({ title, description }) {
  return (
    <div className="mb-8">
      <TypographyH1>{title}</TypographyH1>
    </div>
  );
}
