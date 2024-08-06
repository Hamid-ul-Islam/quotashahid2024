import CarouselWithContent from '@/components/carousel';
import Count from '@/components/count';
import Navbar from '@/components/navbar';
import Shohid from '@/components/Shohid';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <CarouselWithContent />
      <Count />
      <Shohid />
    </div>
  );
}
