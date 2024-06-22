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

import '../components/ReviewSection.css';

const Divider5Rev: React.FC = () => {
  // Sample data for each section
  const sections = [
    {
      id: 1,
      name: 'Mary Beate',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
         <div className="description-with-background-shadow">
          <p><b>A formula for writing successful ads.</b></p>
          <p>Read it. Memorise it. Pledge</p>
          <p>allegiance to it. Defend this </p>
          <p>book at all costs. </p>
        </div>
        </>
      ),
    },
    {
      id: 2,
      name: 'Carole Velt',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
         <div className="description-with-background-shadow">
          <p><b>This book is as enduring as the alps.</b></p>
          <p>Written 100 years ago and it</p>
          <p>still makes sense. Claude</p>
          <p>Hopkins was a genius.</p>
          </div>
        </>
      ),
    },
    {
      id: 3,
      name: 'Hugo Simran',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
         <div className="description-with-background-shadow">
          <p><b>The wisdom in these tomes is timeless.</b></p>
          <p>This book is must for </p>
          <p>anyone creating direct-</p>
          <p>response ads. </p>
          </div>
        </>
      ),
    },
    {
      id: 4,
      name: 'Teddy Hernandez',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
         <div className="description-with-background-shadow">
          <p><b>Don't go to college. Read this book instead.</b></p>
          <p>This book tells it like is. A</p>
          <p>remarkable education is only </p>
          <p>53 pages.</p>
         </div>
        </>
      ),
    },
    {
      id: 5,
      name: 'Chase Martin',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
         <div className="description-with-background-shadow">
          <p><b>A master's seminal masterpiece.</b></p>
          <p>Hopkins Stories, business</p>
          <p>insight, and humour make this</p>
          <p>book well worth your time.</p>
          </div>
        </>
      ),
    },
    {
      id: 6,
      name: 'Cameron Alvin',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
           <div className="description-with-background-shadow">
          <p><b>A lot of information but it's not overwhelming.</b> </p>
          <p>Delightful and easy to read.</p>
          <p>Full of knowledge you can </p>
          <p>apply right away.</p>
          </div>
        </>
      ),
    },
    {
      id: 7,
      name: 'Tania Wout',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
         <div className="description-with-background-shadow">
          <p><b>A definitive guide to writting good advertising.</b></p>
          <p>Probably the most important</p>
          <p>book ever written on </p>
          <p>persuasion.</p>
          </div>
        </>
      ),
    },
    {
      id: 8,
      name: 'Linda Aislinn',
      imageSrc: photo1, // Replace with your image URL
      rating: 5.0,
      description: (
        <>
         <div className="description-with-background-shadow">
          <p><b>Wish I'd found it ten years ago.</b></p>
          <p>Packed with insights about </p>
          <p>psychology , sales, and </p>
          <p>success.</p>
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

export default Divider5Rev;
