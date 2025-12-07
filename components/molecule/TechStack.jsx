import { Card, CardContent, CardFooter, Tabs, TabsContent, TabsList, TabsTrigger, TypographyH1, TypographyP } from '@/components/shadcn-component';
import Image from 'next/image';
import { Technologies } from '@/data/TechIconDatabase';

export function TechStack() {
  const designTechnologies = Technologies.filter((tech) => tech.category === 'design');
  const programmingTechnologies = Technologies.filter((tech) => tech.category === 'programming');

  return (
    <Tabs defaultValue="all" className="w-full max-w-6xl px-4 md:px-6 mx-auto py-12 flex flex-col gap-8">
      <div className={'m-auto'}>
        <TypographyH1>Tech Stack</TypographyH1>
      </div>
      <TabsList className={'m-auto'}>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="programming">Programming</TabsTrigger>
        <TabsTrigger value="design">Design</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className={'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'}>
        {Technologies.map((technology) => (
          <Card key={technology.name} className={'flex flex-col items-center'}>
            <CardContent>
              <Image src={technology.icon} alt={technology.name} width={56} height={56} className={technology.className} />
            </CardContent>
            <CardFooter>
              <TypographyP>{technology.name}</TypographyP>
            </CardFooter>
          </Card>
        ))}
      </TabsContent>
      <TabsContent value="programming" className={'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'}>
        {programmingTechnologies.map((technology) => (
          <Card key={technology.name} className="flex flex-col items-center">
            <CardContent>
              <Image src={technology.icon} alt={technology.name} width={56} height={56} className={technology.className} />
            </CardContent>
            <CardFooter>
              <TypographyP>{technology.name}</TypographyP>
            </CardFooter>
          </Card>
        ))}
      </TabsContent>
      <TabsContent value="design" className={'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'}>
        {designTechnologies.map((technology) => (
          <Card key={technology.name} className="flex flex-col items-center">
            <CardContent>
              <Image src={technology.icon} alt={technology.name} width={56} height={56} className={technology.className} />
            </CardContent>
            <CardFooter>
              <TypographyP>{technology.name}</TypographyP>
            </CardFooter>
          </Card>
        ))}
      </TabsContent>
    </Tabs>
  );
}
