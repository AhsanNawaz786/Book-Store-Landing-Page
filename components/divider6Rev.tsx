import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa'; // Import the star icon from react-icons/fa

// Internal imports
import photo1 from '../public/images/photo1.jpg';
import person2 from '../public/images/person2.jpg';
import person3 from '../public/images/person3.jpg';
import person4 from '../public/images/person4.jpg';
import person5 from '../public/images/person5.jpg';
import person6 from '../public/images/person6.jpg';
import person7 from '../public/images/person7.jpg';
import person8 from '../public/images/person8.jpg';

const Divider6Rev: React.FC = () => {
  // Sample data for each section
  const sections = [
    {
      id: 1,
      name: 'Justin Hardin',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>This is a great classic book.</b></p>
          <p>Classic for copywriters, and</p>
          <p>marketers. Enjoyed reading </p>
          <p>it and will read again. </p>
          </div>
        </>
      ),
    },
    {
      id: 2,
      name: 'Brogin Cezary',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>Flawless and timeless. Loved it.</b></p>
          <p>The insights are so clear and </p>
          <p>simple, it's more like a bible</p>
          <p>for enterpreneurs.</p>
          </div>
        </>
      ),
    },
    {
      id: 3,
      name: 'Mia Singleton',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>A must-read for every copywriters.</b></p>
          <p>This book is very short but</p>
          <p>it's jammed-packed with</p>
          <p>helpful tips.</p>
          </div>
        </>
      ),
    },
    {
      id: 4,
      name: 'Eliza Pinteras',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>Brain food for marketers.</b></p>
          <p>The rest of the testimonial is </p>
          <p>unbolded and should take up </p>
          <p>about 3 lines.</p>
          </div>
        </>
      ),
    },
    {
      id: 5,
      name: 'Cynthia Crowder',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>Essential reading for advertiser everywhere.</b></p>
          <p>If you don't already have a </p>
          <p>copy, I recommend you pick </p>
          <p>one up today.</p>
          </div>
        </>
      ),
    },
    {
      id: 6,
      name: 'Michael McBell',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>There's a reason it's a classic.</b> </p>
          <p>The conversion concepts are</p>
          <p>just as applicable today as </p>
          <p>they were 100 years ago.</p>
          </div>
        </>
      ),
    },
    {
      id: 7,
      name: 'Tim Everette',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>Start your advertising career with this book.</b></p>
          <p>Full of real-life examples that</p>
          <p>will change how you think as</p>
          <p>a marketer.</p>
          </div>
        </>
      ),
    },
    {
      id: 8,
      name: 'Byron Smith',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>I love and recommend this book.</b></p>
          <p>Scientific Advertising </p>
          <p>perfectly sums up the art</p>
          <p>of sales.</p>
          </div>
        </>
      ),
    },
    {
      id: 9,
      name: 'Phillip Antwonette',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>A classic read about advertising.</b></p>
          <p>It covers the fundamentals,</p>
          <p>which, really, is the most</p>
          <p>important part.</p>
          </div>
        </>
      ),
    },
    {
      id: 10,
      name: 'Vanessa Adrianna',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>Ideal for anyone selling a product or service.</b></p>
          <p>Hopkins very simply takes</p>
          <p>you through all the steps of</p>
          <p>successful advertising.</p>
          </div>
        </>
      ),
    },
    {
      id: 11,
      name: 'Alex Purnima',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>It's your key to the kingdom.</b></p>
          <p>If you're a pro, read this book</p>
          <p>twice a year. It will keep you  </p>
          <p>sharp.</p>
          </div>
        </>
      ),
    },
    {
      id: 12,
      name: 'Robert Firmin',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>Sets the foundation and lays the groundwork.</b></p>
          <p>This book is an ideal starting</p>
          <p>point for any advertising</p>
          <p>career.</p>
          </div>
        </>
      ),
    },
    {
      id: 13,
      name: 'Nate Milford',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>It's the original advertising analytics. </b></p>
          <p>Any other way of advertising</p>
          <p>is insanely risky and</p>
          <p>wasteful.</p>
          </div>
        </>
      ),
    },
    {
      id: 14,
      name: 'Yogi Cohen',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>Truly stands the test of time.</b></p>
          <p>Every concept is still solid.</p>
          <p>Don't read other marketing</p>
          <p>books until you've read this.</p>
          </div>
        </>
      ),
    },
    {
      id: 15,
      name: 'Nicole Toshiaki',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>Five stars for Scientific Advertising.</b></p>
          <p>Nothing changes under the </p>
          <p>sun, including advertising.</p>
          <p>These concepts are timeless.</p>
          </div>
        </>
      ),
    },
    {
      id: 16,
      name: 'Heather Crawford',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>Ahead of its time, and not much has changed.</b></p>
          <p>This book breaks down the </p>
          <p>essence of marketing then, </p>
          <p>and now. </p>
          </div>
        </>
      ),
    }
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {sections.map((section) => (
          <div key={section.id} className="p-4 border rounded-lg shadow-md">
            <div className="text-center">
              <Image
                src={section.imageSrc}
                alt={section.name}
                width={160} // Adjust the width as needed
                height={160} // Adjust the height as needed
                className="rounded-full mx-auto mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">{section.name}</h3>
              <div className="flex items-center justify-center mb-2">
                <div className="text-yellow-500 flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar // Use the FaStar component for stars
                      key={index}
                      className={`h-5 w-5 ${index < Math.floor(section.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-500">{section.rating.toFixed(1)}</span>
              </div>
              <p className="text-sm text-gray-600 font-normal">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Divider6Rev;
