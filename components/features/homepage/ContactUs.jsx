import { TypographyH1, TypographyP } from "@/components/ui/shadcn/index";
import { Mail, Phone, MapPin, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

const contactLists = [
  {
    name: Mail,
    description: "saynaufal55@gmail.com",
  },
  {
    name: Phone,
    description: "+62 858 5208 9355",
  },
  {
    name: MapPin,
    description: "Jember, Indonesia",
  },
];
export function ContactUs() {
  return (
    <div
      className="w-full max-w-6xl px-4 md:px-6 mx-auto py-12 flex flex-col gap-10 md:flex-row md:justify-between items-center"
      id="contact-us"
    >
      <div className="max-w-md">
        <Link
          href="/viacontact"
          aria-label="Go to contact page"
          className="inline-flex"
        >
          <TypographyH1
            className="flex items-center gap-2 text-center sm:text-left
               transition-colors hover:text-primary"
          >
            <span>Contact Us</span>
            <SquareArrowOutUpRight className="h-6 w-6 shrink-0" />
          </TypographyH1>
        </Link>
        <p className="mt-2 text-muted-foreground">
          Contact us if you interested to work with us.{" "}
        </p>
      </div>
      <div className="justify-between items-center flex flex-col sm:flex-row gap-8">
        {contactLists.map((contactList) => {
          const Icon = contactList.name;
          return (
            <div
              key={contactList.description}
              className="flex items-start sm:flex-col gap-4"
            >
              <Icon />
              <TypographyP>{contactList.description}</TypographyP>
            </div>
          );
        })}
      </div>
    </div>
  );
}
