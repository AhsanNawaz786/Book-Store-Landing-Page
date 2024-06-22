import React from 'react';
import buynowbtn from '@/public/images/buynowbtn.png'
import chap1btn from '@/public/images/readchap1btn.png'
import Image from 'next/image';

const Mybutton: React.FC = () => {
    const handleButton1Click = () => {
      // Handle button 1 click event
    };
  
    const handleButton2Click = () => {
      // Handle button 2 click event
    };
  
    return (
        <div className="text-center">
      <div className="flex justify-center">
        <div className="flex flex-col items-center mr-4">          
          <Image
            onClick={handleButton1Click}
            src = {buynowbtn} // Replace with your image source
            alt="Buy Now Button"
            style={{ width: '260px', height: '80px' }} 
          > 
          </Image>
          <p className="mt-2" style={{ color: '#006400', fontWeight: 'bold' }}>
          Don't Delay. Flash Sale Ends Tomorrow.
          </p>

        </div>


        <div className="flex flex-col items-center">
        <Image
            onClick={handleButton1Click}
            src = {chap1btn} // Replace with your image source
            alt="Buy Now Button"
            style={{ width: '260px', height: '80px' }} 
          > 
          </Image>
          <p className="text-gray-800 mt-2" style={{fontWeight: 'bold' }}>
            Get Emailed the first chapter instantly.
          </p>
        </div>
      </div>
    </div>
    );
  };

export default Mybutton;
