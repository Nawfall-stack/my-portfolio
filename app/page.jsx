"use client";

import {
  AboutMe,
  Hero,
  TechStack,
  Project,
  Testimonial,
  ContactUs,
} from "@/components/features/homepage/index";
import { AnimatedContent } from "@/components/ui/reactbits/index";

const sections = [Hero, AboutMe, TechStack, Project, Testimonial];

export default function Home() {
  return (
    <>
      {sections.map((Section, index) => (
        <AnimatedContent
          key={index}
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
          <Section />
        </AnimatedContent>
      ))}
      <ContactUs />
    </>
  );
}
