import { Logo, Navbar, HamburgerMenu, ModeToggle } from '@/components/atom-component';

export function Header() {
  return (
    <div className="sticky top-0 z-50 py-3 px-8 bg-background">
      <div className="justify-between items-center  hidden md:flex">
        <Logo></Logo>
        <Navbar></Navbar>
        <ModeToggle ></ModeToggle>
      </div>
      <div className='flex justify-between items-center md:hidden'>
      <Logo></Logo>
      <HamburgerMenu></HamburgerMenu>
      </div>
    </div>
  );
}
