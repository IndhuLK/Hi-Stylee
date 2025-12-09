import React from 'react'
import Hero from './Hero'
import Services from './Services'
import WhyChooseUs from './WhyChooseUs'
import Contact from './Contact'
import AboutSection from './AboutSection'
import InteriorSlider from './InteriorSlider'
import TestimonialSlider from './TestimonialSlider'
import InteriorIdeasSlider from './InteriorIdeasSlider'
import EstimateSection from './EstimateSection'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'
import FAQ from './FAQ'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Services />
      <InteriorSlider />
      <TestimonialSlider />
      <InteriorIdeasSlider />
      <EstimateSection />
      <Testimonials />
      <CallToAction />
      <FAQ />
      
    </div>
  )
}

export default Home