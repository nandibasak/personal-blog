import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/ui/Container';

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className='space-y-12'>
      <Navbar />

      <Container>{children}</Container>
    </div>
  );
};

export default HomeLayout;
