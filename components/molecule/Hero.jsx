'use client'

import { RotatingText, AnimatedContent } from '@/components/reactbits-component';
import { Badge, TypographyP, TypographyH1, Button } from '@/components/shadcn-component';

export function Hero() {
  return (
    <AnimatedContent distance={125} direction="vertical" reverse={false} duration={1.5} ease="power3.out" initialOpacity={0.2} animateOpacity threshold={0.2} delay={0.3}>
        <div className="flex flex-col items-center justify-center gap-4 mt-14">
          <Badge className="py-1 px-4 text-base rounded-2xl" variant="outline">
            Welcome to My Website Portfolio
          </Badge>
          <TypographyH1>Hello there, I'm a</TypographyH1>
          <RotatingText
            texts={['Front End Developer', 'UI/UX Designer', 'Graphic Designer', 'Logo Designer', 'Motion Designer']}
            mainClassName="px-2 sm:px-2 md:px-3 overflow-hidden justify-center -mt-4 rounded-sm text-foreground text-center leading-tighter text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl"
            staggerFrom={'last'}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
          <TypographyP className={'xl:max-w-xl'}>A creative mind passionate about design, code, and crafting seamless user experiences.</TypographyP>
          <Button>
            <a href="/portfolio.pdf" download="">
              Download my portfolio
            </a>
          </Button>
        </div>
      </AnimatedContent>
  );
}

