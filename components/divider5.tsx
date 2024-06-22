import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'
import banner2 from '@/public/images/banner2.png'
import Image from 'next/image'
import ReviewSection from './ReviewSection'
import imagebtn from '@/public/images/loadmore-btn.png'
import urgentoffer from  '@/public/images/urgent-offer.png'
import Divider5Rev from './divider5Rev'
import buynowbtn from '@/public/images/buynowbtn.png'

export default function Divider5() {
  return (
    <section className="relative">
      
     
      {/* Illustration behind hero content */}

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
       
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          
          {/*
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
          */}
          
        </svg>
       
      </div>
    

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Banner Section Here*/}
          <div className="text-center pb-12 md:pb-16">
          <Image
             src = {banner2}
             alt ="Make your website wonderful"
             className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 mx-auto"
             data-aos="zoom-y-out"
             width={950}
              />

            {/* Here is a text
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Make your website <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">wonderful</span></h1>
            */}

            <div className="max-w-3xl mx-auto">
               {/*
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
               */}
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
               {/* 
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div>  
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
                */}
              
              </div>
            </div>
          </div>

          {/* Add Review Component here. */}
          <Divider5Rev />


        {/*Add button here*/}
        <div className="text-center pb-12 md:pb-16">
        <button>
          <Image
           src={imagebtn}
           alt="Button Image"
           className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 mx-auto"
           data-aos="zoom-y-out"
           width={100} // Set your desired image width
           height={50} // Set your desired image height
          />
        </button>
         </div>

         {/*Add Button Here*/}
         <div className="text-center">
                 <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                  <Image
                   src = {buynowbtn} // Replace with your image source
                   alt="Buy Now Button"
                  style={{ width: '310px', height: '80px' }} 
                  > 
          </Image>
          <p className="mt-2" style={{ color: '#006400', fontWeight: 'bold' }}>
          Don't Delay. Flash Sale Ends Tomorrow.
          </p>
        {/*You can insert para line here*/}
                  </div>
                </div>
              </div>               
                




         {/*Add Urgent offer section here
         <Image
           src={urgentoffer}
           alt="Button Image"
           className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
           data-aos="zoom-y-out"
           width={550} // Set your desired image width
           height={340} // Set your desired image height
          />
*/}



        </div>

      </div>
    </section>
  )
}