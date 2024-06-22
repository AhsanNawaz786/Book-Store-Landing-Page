import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'
import banner1 from '@/public/images/banner1.png'
import Image from 'next/image'
import ReviewSection from './ReviewSection'
import imagebtn from '@/public/images/loadmore-btn.png'
import urgentoffer from '@/public/images/urgent-offer.png'
import offerheading from '@/public/images/50off.png'
import buynowbtn from '@/public/images/buynowbtn.png'

export default function Hero() {
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

          {/* Banner Section Here*/}
          <div className="text-center pb-12 md:pb-16">
            <Image
              src={banner1}
              alt="Make your website wonderful"
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 mx-auto"
              data-aos="zoom-y-out"
              width={950}
            />
            <div className="max-w-3xl mx-auto">
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              </div>
            </div>
          </div>

          {/* Add Review Component here. */}
          <ReviewSection />

          {/* Add button here */}
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

        </div>

      </div>
    </section>
  )
}
