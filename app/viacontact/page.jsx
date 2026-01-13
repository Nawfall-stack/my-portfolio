"use client";

import { Mail, MessageCircle, Send, Linkedin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardContent, Button } from "@/components/ui/shadcn/index";

const CONTACTS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/6285852089355?text=Hi%20Naufal,%20I%20want%20to%20work%20with%20you",
    icon: MessageCircle,
    description: "Fast response via WhatsApp",
  },
  {
    label: "Telegram",
    href: "https://t.me/usernamekamu",
    icon: Send,
    description: "Chat via Telegram",
  },
  {
    label: "Email",
    href: "mailto:saynaufal55@gmail.com",
    icon: Mail,
    description: "Send me an email",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/usernamekamu",
    icon: Linkedin,
    description: "Professional networking",
  },
];

export default function ViaContactPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto max-w-4xl px-4 py-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Let’s Work Together
        </h1>
        <p className="mt-3 text-muted-foreground">
          Choose the platform you’re most comfortable with
        </p>
      </div>

      {/* Contact Options */}
      <div className="grid gap-6 sm:grid-cols-2">
        {CONTACTS.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="group transition hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Back Button */}
      <div className="mt-14 flex justify-center">
        <Button
          variant="ghost"
          size="lg"
          className="flex items-center gap-2"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4" />
          Back To Home
        </Button>
      </div>
    </div>
  );
}
