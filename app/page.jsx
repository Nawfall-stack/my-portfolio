'use client';

import { AboutMe, Header, Hero, TechStack, Project, Testimonial } from '@/components/molecule-component';
import { TypographyH1 } from '@/components/shadcn-component';

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <TechStack></TechStack>
      <Project></Project>
      <Testimonial></Testimonial>
      <div>
        <div className={'m-auto'}>
          <TypographyH1>Contact Us</TypographyH1>
        </div>
      </div>
    </>
  );
}
