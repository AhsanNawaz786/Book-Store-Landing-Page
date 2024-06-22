import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'
import banner1 from '@/public/images/banner1.png'
import Image from 'next/image'
import ReviewSection from './ReviewSection'
import imagebtn from '@/public/images/loadmore-btn.png'
import urgentoffer from '@/public/images/urgent-offer.png'
import offerheading from '@/public/images/50off.png'
import buynowbtn from '@/public/images/buynowbtn.png'
import TestimonialImage from '@/public/images/guarantee.png';
import logo from '@/public/images/logo.png';
import chap1head from '@/public/images/chap1head.png';
import chap1poster from '@/public/images/readchap1poster.png';
import chap1btn from '@/public/images/readchap1button.png';

export default function Divider7() {
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
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Add Urgent offer section here */}
          <div className="flex flex-col md:flex-row">
            {/* Add Urgent offer image */}
            <div className="md:w-1/2">
              <Image
                src={urgentoffer}
                alt="Button Image"
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
                width={550} // Set your desired image width
                height={340} // Set your desired image height
              />
            </div>

            <div className="md:w-1/2">
              {/* Image */}
              <Image
                src={offerheading}
                alt="Button Image"
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
                width={250} // Set your desired image width
                height={200} // Set your desired image height
              />

              {/* Form */}
              <form className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full py-2 px-4 rounded border border-gray-300"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Enter your full name"
                    className="w-full py-2 px-4 rounded border border-gray-300"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="Enter your card number"
                    className="w-full py-2 px-4 rounded border border-gray-300"
                  />
                </div>
                <a href="#" className="flex items-center justify-center">
                <Image
                   src = {buynowbtn} // Replace with your image source
                   alt="Buy Now Button"
                  style={{ width: '310px', height: '80px' }} 
                  > 
          </Image>
          <p className="mt-2" style={{ color: '#006400', fontWeight: 'bold' }}>
          Don't Delay. Flash Sale Ends Tomorrow.
          </p>
                </a>
              </form>

            </div>
          
          </div>
           
           {/** 100 percent Guartenee tag image.*/}
<br/>
<br/>

           <div className="flex items-center justify-center">
  <Image
    className="rounded-full"
    src={TestimonialImage}
    style={{ width: '140px', height: '140px' }}
    alt="Testimonial 01"
  />
  </div>

           {/*Start here*/}        
           <div className="max-w-6xl mx-auto px-4 sm:px-6">

{/* Hero content */}
<div className="pt-32 pb-12 md:pt-40 md:pb-20">
  
  {/* Swap positions: urgentoffer on right, offerheading, form, buynowbtn on left */}
  <div className="flex flex-col md:flex-row">
    {/* Right side content */}
    <div className="md:w-1/2 flex flex-col items-center justify-center">
      {/* Image chapter 1 Heading */}
      <Image
        src={chap1head}
        alt="Button Image"
        className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
        data-aos="zoom-y-out"
        width={230} // Set your desired image width
        height={200} // Set your desired image height
      />

      {/* Form */}
      <form className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full py-2 px-4 rounded border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter your full name"
            className="w-full py-2 px-4 rounded border border-gray-300"
          />
        </div>
        
        <a href="#" className="flex items-center justify-center">
          <Image
            src={chap1btn}
            alt="Button Image"
            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
              width ="200" // Set your desired image width
              height ="200" // Set your desired image height
        
            
          />
        </a>
      </form>

    </div>

    {/* Left side: urgentoffer */}
    <div className="md:w-1/2">
      <Image
        src={chap1poster}
        alt="Button Image"
        className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
        data-aos="zoom-y-out"
        width={550} // Set your desired image width
        height={340} // Set your desired image height
      />
    </div>
  
  </div>

  {/* 100 percent Guarantee tag image (centered) */}
  <div className="text-center mt-8">
    <Image
      className="rounded-full mx-auto"
      src={logo}
      style={{ width: '190px', height: '190px' }}
      alt="Testimonial 01"
    />
  </div>

</div>

</div>
  {/*End here*/}

</div>

</div>
    </section>
  )
}
