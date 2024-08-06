import { shohidDB } from '../lib/data';
import Heading from './typography/heading';
import Paragraph from './typography/paragraph';
import SubHeading from './typography/sub-heading';
export default function Shohid() {
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
        {shohidDB?.map((shohid, index) => (
          <div key={index} className="rounded-xl p-3 bg-gray-50 border">
            <div className="relative">
              <img src={shohid?.imageUrl} alt="" />
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
      </div>
    </div>
  );
}
