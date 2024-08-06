'use client';
import { Carousel, Typography } from '@material-tailwind/react';

const carouselData = [
  {
    headline: '2024 Bangladesh Quota Reform Movement: A Fight for Equality',
    text: "The 2024 Bangladesh Quota Reform Movement has been a pivotal moment in our nation's history, where thousands of students and citizens stood up for their rights, demanding an end to discriminatory quota practices.",
    image: 'images/image1.jpg',
  },
  {
    headline: 'Remembering the Fallen: Over 500 Lives Lost',
    text: 'Tragically, more than 500 students and children have lost their lives in the struggle for justice and equality. We honor their bravery and sacrifice.',
    image: 'images/image2.png',
  },
  {
    headline: 'Thousands Injured in the Pursuit of Justice',
    text: 'With over 33,000 injuries reported to date, the movement has seen immense suffering. Our thoughts are with those who have been hurt in the fight for a fairer future.',
    image: 'images/image3.png',
  },
  {
    headline: 'A Dark Chapter: 11,000+ Arrests and Disappearances',
    text: 'The crackdown on protestors has led to more than 11,000 arrests and disappearances. We strive to shed light on these injustices and seek accountability.',
    image: 'images/image4.png',
  },
  {
    headline: "Fascist Government's Fall: Resignation of Sheikh Hasina",
    text: 'The fascist government, with all its killer supporters, has left the country. Prime Minister Sheikh Hasina resigned on August 5, 2024, marking a significant turn in the struggle for justice.',
    image: 'images/image5.png',
  },
  {
    headline: 'Global Awareness: The Impact of the Quota Reform Movement',
    text: 'Our website aims to educate the world about the 2024 Bangladesh Quota Reform Movement, ensuring that future generations understand the significance of this fight for equality and justice.',
    image: 'images/image6.png',
  },
];

export default function CarouselWithContent() {
  return (
    <Carousel autoplay loop transition={{ duration: 1 }} className="">
      {carouselData.map((item, index) => (
        <div
          key={index}
          className="relative h-full rounded-b-xl overflow-hidden w-full"
        >
          <img
            src={item.image}
            alt={item.headline}
            className="h-[600px] w-full object-cover"
          />

          <div className="absolute inset-0 grid h-full w-full items-center bg-black/60">
            <div className="w-3/4 pl-12 md:w-3/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {item.headline}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                {item.text}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
