import React from 'react'
import BussinessBanner from './BusinessBanner'
import BusinessInterior from './BusinessInterior'
import BusinessShowcase from './BusinessShowcase'
import BusinessDesign from './BusinessDesign'
import BusinessTestimonial from './BusinessTestimonial'

const BusinessHome = () => {
  return (
    <div>
      <BussinessBanner />
      <BusinessInterior />
      <BusinessShowcase />
      <BusinessDesign />
      <BusinessTestimonial />
    </div>
  )
}

export default BusinessHome