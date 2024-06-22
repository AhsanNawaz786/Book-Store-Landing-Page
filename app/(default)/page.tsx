import React from 'react';
import Hero from '@/components/hero';
import Features from '@/components/features';
import FeaturesBlocks from '@/components/features-blocks';
import Testimonials from '@/components/testimonials';
import Divider5 from '@/components/divider5';
import Divider6 from '@/components/divider6';
import Divider73 from '@/components/divider73';
import Pager from '@/components/pager';


function Home() {
  return (
    <>
      <Features />
      <Testimonials />
      <Hero />
      <Pager />
      <Divider5 />
      <Divider6 />
      {/* <FeaturesBlocks /> */}
      <Divider73 />
    
    
    
    </>
  );
}
export default Home;