'use client';
import { shohidDB as allData } from '@/lib/data';
import { useEffect, useRef, useState } from 'react';
import Heading from './typography/heading';
import Paragraph from './typography/paragraph';
import SubHeading from './typography/sub-heading';

interface DataItem {
  imageUrl: string;
  name: string;
  role: string;
  institution: string;
  date: string;
  rank: string;
}

const InfiniteScroll: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const page = useRef<number>(1);
  const pageSize = 10; // Number of items per page

  const fetchData = () => {
    if (loading || !hasMore) return;

    setLoading(true);
    console.log('Fetching data...');
    const startIndex = (page.current - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const newData = allData.slice(startIndex, endIndex);

    if (newData.length === 0) {
      setHasMore(false);
    } else {
      setData((prevData) => [...prevData, ...newData]);
      page.current += 1;
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const lastElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      console.log('Intersection observer callback triggered');
      if (entries[0].isIntersecting && hasMore && !loading) {
        fetchData();
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null, // or specify a scroll container if needed
      rootMargin: '0px',
      threshold: 0.1, // or try other values
    });

    if (lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }

    return () => {
      if (lastElementRef.current) {
        observer.unobserve(lastElementRef.current);
      }
    };
  }, [loading, hasMore]);

  useEffect(() => {
    console.log('Data:', data);
    console.log('Has More:', hasMore);
  }, [data, hasMore]);

  return (
    <div className="mb-10">
      <div>
        <Heading className="">
          List of <span className="text-red-900">Martyrs(Shahid)</span> in the
          Movement
        </Heading>
        <Paragraph>
          These martyrs did not just give their lives; they gifted us a future
          free from the chains of autocracy. Their courage in the face of
          overwhelming adversity serves as a beacon of hope and a reminder of
          the power of unity and determination.
        </Paragraph>
      </div>
      <hr className="my-5 border" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {data.map((shohid, index) => (
          <div key={index} className="rounded-xl p-3 bg-gray-50 border">
            <div className="relative">
              <img src={shohid?.imageUrl} alt={shohid?.name} />
              <span className="absolute top-0 right-0 px-3 py-1 bg-red-900 text-white">
                {index + 1}
              </span>
            </div>
            <div>
              <SubHeading className="text-lg mt-3">
                <span className="text-red-900">Shahid</span> {shohid?.name}
              </SubHeading>
              <p className="font-medium text-md">{shohid?.role}</p>
              <p className="my-1">{shohid?.institution}</p>
              <p>{shohid?.date}</p>
            </div>
          </div>
        ))}
        <div className="w-full p-10" ref={lastElementRef}>
          {loading && (
            <span className="text-red-900 font-bold text-2xl">
              Loading more data...
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
