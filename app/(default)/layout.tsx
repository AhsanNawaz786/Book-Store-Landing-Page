'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'


import Footer from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
      <main className="grow">

        {children}

      </main>

      {/*Add Footer code here.*/}
      <Footer
        companyName="Scientific Advertising"
        year={new Date().getFullYear()}
        address="123 Main Street, City"
        email="info@company.com"
        phone="123-456-7890"
      />
    </>
  )
}
