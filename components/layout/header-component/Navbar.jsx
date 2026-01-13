import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/shadcn/index";
import Link from "next/link";
import { navData } from "@/data/TechIconDatabase";

export function Navbar() {
  return (
    <NavigationMenu viewport={false} className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">Nawfall</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Showcasing selected works and skills in web development
                      and UI design.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/#tech-stack" title="Tech Stack">
                Tools and technologies I rely on to craft scalable and efficient
                web solutions.
              </ListItem>
              <ListItem href="/#featured-project" title="Featured Project">
                Selected works that highlight my development skills and design
                thinking.
              </ListItem>
              <ListItem href="/#testimonials" title="Testimonials">
                Words from collaborators and clients about working with me.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {navData.map((section) => (
          <NavigationMenuItem key={section.trigger}>
            <NavigationMenuTrigger>{section.trigger}</NavigationMenuTrigger>

            <NavigationMenuContent>
              {section.type === "list" && (
                <ul className="grid w-[400px] gap-2 md:grid-cols-2">
                  {section.items.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              )}

              {section.type === "simple" && (
                <ul className="grid w-[200px] gap-2">
                  {section.items.map((item) => (
                    <NavigationMenuLink key={item.label} asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              )}

              {section.type === "icon" && (
                <ul className="grid w-[200px] gap-2">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <NavigationMenuLink key={item.label} asChild>
                        <Link
                          href={item.href}
                          className="flex flex-row items-center gap-2"
                        >
                          <Icon className="size-4" />
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    );
                  })}
                </ul>
              )}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        {/* Static Link */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/article">Article</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/resume">Resume</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
