import CarouselWithContent from '@/components/carousel';
import Count from '@/components/count';
import InfiniteScroll from '@/components/test-shohid';

export default function Home() {
  return (
    <div className="">
      <CarouselWithContent />
      <Count />
      {/* <Shohid /> */}
      <InfiniteScroll />
    </div>
  );
}
