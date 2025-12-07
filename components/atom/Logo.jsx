import Link from 'next/link';
import { TypographyH3 } from '@/components/shadcn-component';

export function Logo() {
  return (
    <Link href="/">
      <div className='flex justify-center items-center gap-2'>
        <svg className="h-6 w-auto fill-current text-black dark:text-white" viewBox="0 0 91 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M54.8084 49.0625H72.995L63.7938 33.125L72.454 28.125L90.3163 59.0625H59.5311L70.6034 82.5L0 83.1469L6.33013 72.1828L54.8202 72.5L48.4725 59.0625L13.4559 59.0625L38.7977 15.1699L54.8084 49.0625ZM30.7772 49.0625L43.7489 49.0625L37.911 36.7041L30.7772 49.0625ZM67.0418 18.75L58.3817 23.75L47.5555 5L56.2166 0L67.0418 18.75Z" />
        </svg>
        {/* <TypographyH3>Nawfall</TypographyH3> */}
      </div>
    </Link>
  );
}
