import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/ui/Container';
import { Separator } from '@/components/ui/separator';

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className='space-y-10'>
      <Navbar />

      <Container className='pb-20'>{children}</Container>

      <div className='my-6 space-y-6 py-6'>
        <Separator className='w-full opacity-50' />
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
