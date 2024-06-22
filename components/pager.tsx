import React from 'react';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import FascinationWall from '../components/FascinationWall';
import buynowbtn from '@/public/images/buynowbtn.png'

const Pager: React.FC = () => {
  const containerStyle = { marginLeft: '100px', fontWeight: 'bold' };

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ zIndex: 1, marginLeft: '100px' }}>
          <Image
            src={logo}
            alt="Scientific Advertising"
            width={120} // Set your desired image width
            height={120} // Set your desired image height
          />
        </div>
        <h1 style={{ fontSize: '60px', marginLeft: '40px', fontWeight: 'bold' }}>
          <span style={{ fontWeight: '2000' }}>Scientific Advertising</span>
        </h1>
      </div>

      {/* Text content */}
      {/* Additional Heading 1 */}
      <div style={{ zIndex: 1, marginLeft: '100px' }}>
        <h1 style={{ fontSize: '35px', fontWeight: 'bold', marginTop: '10px' }}>
          1 book. 53 pages. Hundreds of profound takeaways.
        </h1>
      </div>

      {/* Additional Heading 2 */}
      <div style={{ zIndex: 1, marginLeft: '100px' }}>
        <h2 style={{ fontSize: '35px', fontWeight: 'normal', marginTop: '10px' }}>
          Here's a small sample of what you'll learn when you read this book:
        </h2>
      </div>

      {/* FascinationWall component */}
      <div style={containerStyle}>
        <FascinationWall />
      </div>

       {/* Add space between FascinationWall and button */}
       <div style={{ margin: '45px 0' }}></div>

                     {/*Button Starts Here*/}
                     <div className="text-center">
                 <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                   
                  <Image
                   src = {buynowbtn} // Replace with your image source
                   alt="Buy Now Button"
                  style={{ width: '260px', height: '80px' }} 
                  > 
                  </Image>
                    <p className="mt-2" style={{ color: '#006400', fontWeight: 'bold' }}>
                    Don't Delay. Flash Sale Ends Tomorrow.
                    </p>

        {/*You can insert para line here*/}
                  </div>
                </div>
              </div>  
              
                    {/*Button Ends Here*/} 

                    <div style={{ margin: '40px 0' }}></div>

    </div>
  );
};

export default Pager;
