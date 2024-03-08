import Brand from '../Brand';
import ThemeToggle from '../ThemeToggle';
import Container from '../ui/Container';
import Links from './Links';
import MobileMenu from './MobileMenu';
import Search from './Search';

const Navbar = () => {
  return (
    <nav className='dark:shadow-purple/30 sticky left-0 top-0 z-40 flex h-16 w-full items-center justify-center border-b-[1px] border-slate-300 bg-background shadow-lg dark:border-slate-800'>
      <Container className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-12'>
          <Brand />
          <Links className='hidden sm:flex' />
        </div>

        <div className='flex items-center justify-center gap-2.5 sm:gap-6'>
          <ThemeToggle />
          <Search />

          <MobileMenu />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
