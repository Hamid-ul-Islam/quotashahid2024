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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);

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

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(lowercasedQuery),
    );
    setFilteredData(filtered);
  }, [data, searchQuery]);

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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="mb-10">
      <div>
        <div className="flex items-center justify-between">
          <Heading className="">
            List of <span className="text-red-900">Martyrs(Shahid)</span> in the
            Movement
          </Heading>
          <div className="relative">
            <input
              className="border w-[400px] border-gray-300 bg-gray-50 rounded px-3 py-2 outline-gray-700 placeholder:text-gray-600"
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Find a Shohid"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_2003_276)">
                  <path
                    d="M15.8046 14.862L11.8253 10.8827C12.9097 9.5564 13.4429 7.86406 13.3145 6.15571C13.1862 4.44735 12.4061 2.85369 11.1357 1.70435C9.86528 0.555007 8.2017 -0.0620722 6.48907 -0.019251C4.77644 0.0235702 3.14578 0.723015 1.93439 1.93441C0.722992 3.1458 0.0235473 4.77646 -0.0192739 6.48909C-0.0620951 8.20173 0.554984 9.8653 1.70432 11.1357C2.85366 12.4061 4.44733 13.1862 6.15568 13.3146C7.86404 13.4429 9.55637 12.9097 10.8826 11.8253L14.862 15.8047C14.9877 15.9261 15.1561 15.9933 15.3309 15.9918C15.5057 15.9903 15.6729 15.9202 15.7965 15.7965C15.9201 15.6729 15.9902 15.5057 15.9918 15.3309C15.9933 15.1561 15.9261 14.9877 15.8046 14.862ZM6.66664 12C5.61181 12 4.58066 11.6872 3.7036 11.1012C2.82654 10.5151 2.14295 9.68218 1.73929 8.70764C1.33562 7.73311 1.23 6.66075 1.43579 5.62618C1.64158 4.59162 2.14953 3.64131 2.89541 2.89543C3.64129 2.14955 4.5916 1.6416 5.62616 1.43581C6.66073 1.23002 7.73308 1.33564 8.70762 1.73931C9.68216 2.14298 10.5151 2.82656 11.1011 3.70362C11.6872 4.58069 12 5.61183 12 6.66667C11.9984 8.08067 11.436 9.4363 10.4361 10.4361C9.43628 11.436 8.08064 11.9984 6.66664 12Z"
                    fill="#262626"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2003_276">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
        <Paragraph>
          These martyrs did not just give their lives; they gifted us a future
          free from the chains of autocracy. Their courage in the face of
          overwhelming adversity serves as a beacon of hope and a reminder of
          the power of unity and determination.
        </Paragraph>
      </div>
      <hr className="my-5 border" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {filteredData.map((shohid, index) => (
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
