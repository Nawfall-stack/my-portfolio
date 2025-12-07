import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, TypographyH1, Badge, TypographySmall, Button } from '@/components/shadcn-component';
import Image from 'next/image';
import Link from 'next/link';

export function Project() {
  const Projects = [
    { image: '/project-image/design.jpg', title: 'Creative AI Branding', subtitle: 'Design & Motion', description: 'Modern branding design enhanced with AI, from concept to motion graphics.', badge: ['figma', 'jitter', 'canva'] },
    {
      image: '/project-image/programming.jpg',
      title: 'Front-End Web Application',
      subtitle: 'Web Design & Web Programming',
      description: 'A scalable and responsive full-stack web application built with Next.js and TailwindCSS.',
      badge: ['nextJs', 'tailwindcss', 'framer-motion'],
    },
    {
      image: '/project-image/stats.jpg',
      title: 'Statistical Data Analysis Project',
      subtitle: 'Stats & Data',
      description: 'A comprehensive data analysis and visualization project using statistical software to derive insights.',
      badge: ['R', 'SPSS'],
    },
  ];
  return (
    <div className="w-full max-w-6xl px-4 md:px-6 mx-auto py-12 flex flex-col gap-8">
      <div className={'m-auto'}>
        <TypographyH1>Featured Project</TypographyH1>
      </div>
      <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
        {Projects.map((project) => (
          <Card key={project.title} className="overflow-hidden pt-0">
            <div className="relative w-full h-48">
              <Image src={project.image} alt="" fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <TypographySmall>{project.description}</TypographySmall>
            </CardContent>
            <CardFooter className={'flex gap-1'}>
              {project.badge.map((item, idx) => (
                <Badge key={idx} variant={'outline'}>
                  {item}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <Button variant={'secondary'}>
          <Link href={'/gallery'}> see my gallery</Link>
        </Button>
        <Button variant={'secondary'}>
          <Link href={'/project'}> see my project</Link>
        </Button>
      </div>
    </div>
  );
}
