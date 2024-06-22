import React from 'react';
import Image from 'next/image';
import '../components/ReviewSection.css';
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

const ReviewSection: React.FC = () => {
  // Sample data for each section
  const sections = [
    {
      id: 1,
      name: 'Jenny Renate',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
          <div className="description-with-background-shadow">
          <p><b>"Old Schoool" but still 100% relevent.</b></p>
          <p>A lot of great nuggets in this</p>
          <p>one. This book will help you </p>
          <p>get predictable results. </p>
          </div>
        </>
      ),
    },
    {
      id: 2,
      name: 'Matt Mariska',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>This book exceed my expectations.</b></p>
          <p>I did not know what to expect</p>
          <p>from a 100 year old book. In</p>
          <p>the end, I wasn't let down.</p>
          </div>
        </>
      ),
    },
    {
      id: 3,
      name: 'Conny Prager',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>Good read for all especially beginnners.</b></p>
          <p>If you're just starting putting out in</p>
          <p>advertising, you will get the  </p>
          <p>most of out of this book.</p>
          </div>
        </>
      ),
    },
    {
      id: 4,
      name: 'Caroline Gherardo',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
           <div className="description-with-background-shadow">
          <p><b>I liked how easy it is to read/follow. </b></p>
          <p>Plus, it is illuminating</p>
          <p>and forth coming. I love how the </p>
          <p>author held nothing back</p>
          </div>
        </>
      ),
    },
    {
      id: 5,
      name: 'Garret Holland',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
        <div className="description-with-background-shadow">
          <p><b>Lovely little read. will keep it close by. </b></p>
          <p>I don't typically reread books.</p>
          <p>But I already know I'll revisit </p>
          <p>this one over and over.</p>
          </div>
        </>
      ),
    },
    {
      id: 6,
      name: 'Sergi Benedikt',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
         <div className="description-with-background-shadow">
          <p><b>It's impossible to ignore the logic.</b> </p>
          <p>Claude Hopkins semenial</p>
          <p>work written a century ago.</p>
          <p>Still makes perfect sense.</p>
          </div>
        </>
      ),
    },
    {
      id: 7,
      name: 'Brandon Thomas',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
         <div className="description-with-background-shadow">
          <p><b>Where has been this book been my whole career?</b></p>
          <p>I am experienced marketer</p>
          <p>and now reading this book</p>
          <p>gave me a new prespective.</p>
          </div>
        </>
      ),
    },
    {
      id: 8,
      name: 'Alex Horowitz',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
         <div className="description-with-background-shadow">
          <p><b>Real deal. No smoke and mirrors.</b></p>
          <p>Impossible to give this book</p>
          <p>enough praise. It's simple but</p>
          <p>incredibly profound.</p>
          </div>
        </>
      ),
    },
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

export default ReviewSection;
