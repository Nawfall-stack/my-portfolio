import { Github, Instagram, Linkedin, Dribbble } from "lucide-react";

export const Technologies = [
  { name: "Html", icon: "/icons/html.svg", category: "programming" },
  { name: "Css", icon: "/icons/css.svg", category: "programming" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg", category: "programming" },
  { name: "React", icon: "/icons/react.svg", category: "programming" },
  { name: "Git", icon: "/icons/git.svg", category: "programming" },
  {
    name: "Cli",
    icon: "/icons/cli.svg",
    category: "programming",
    className: "dark:invert",
  },
  { name: "Npm", icon: "/icons/npm.svg", category: "programming" },
  { name: "Pnpm", icon: "/icons/pnpm.svg", category: "programming" },
  {
    name: "Typescript",
    icon: "/icons/typescript.svg",
    category: "programming",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwind.svg",
    category: "programming",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript.svg",
    category: "programming",
  },
  {
    name: "Next.js",
    icon: "/icons/nextjs.svg",
    category: "programming",
    className: "dark:invert",
  },
  { name: "Vite", icon: "/icons/vite.svg", category: "programming" },
  {
    name: "Framer Motion",
    icon: "/icons/framer-motion.svg",
    category: "programming",
  },
  {
    name: "Vercel",
    icon: "/icons/vercel.svg",
    category: "programming",
    className: "dark:invert",
  },
  { name: "Ibis Paint X", icon: "/icons/ibis-paint-x.svg", category: "design" },
  { name: "Figma", icon: "/icons/figma.svg", category: "design" },
  { name: "Canva", icon: "/icons/canva.svg", category: "design" },
  { name: "Corel Draw", icon: "/icons/corel.svg", category: "design" },
  { name: "Spline", icon: "/icons/spline.png", category: "design" },
  { name: "Pixellab", icon: "/icons/pixellab.svg", category: "design" },
  { name: "Jitter", icon: "/icons/jitter.svg", category: "design" },
];

export const navData = [
  {
    trigger: "Collections",
    type: "list",
    items: [
      {
        title: "Logo",
        href: "/collections/logo",
        description: "Logo designs focused on branding and visual identity.",
      },
      {
        title: "Poster",
        href: "/collections/poster",
        description: "Posters for promotion and visual communication.",
      },
      {
        title: "Thumbnail",
        href: "/collections/thumbnail",
        description: "Engaging thumbnails for digital content.",
      },
      {
        title: "Font",
        href: "/collections/font",
        description: "Custom fonts and typography exploration.",
      },
      {
        title: "Social Media",
        href: "/collections/socmed",
        description: "Aesthetic and consistent Instagram layouts.",
      },
      {
        title: "Illustration",
        href: "/collections/illustration",
        description: "Flat and isometric illustrations.",
      },
    ],
  },

  {
    trigger: "Showcase",
    type: "simple",
    items: [
      { label: "Personal Branding", href: "/showcase" },
      { label: "UI/UX Design", href: "/showcase" },
      { label: "Website Project", href: "/showcase" },
    ],
  },

  {
    trigger: "Social",
    type: "icon",
    items: [
      {
        label: "Github",
        href: "https://github.com/Nawfall-stack",
        icon: Github,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/naw_fall9104/",
        icon: Instagram,
      },
      {
        label: "Linkedin",
        href: "https://LinkedIn.com",
        icon: Linkedin,
      },
      {
        label: "Dribbble",
        href: "https://Dribbble.com",
        icon: Dribbble,
      },
    ],
  },
];
