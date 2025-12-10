import React from 'react'
import BussinessBanner from './BusinessBanner'
import BusinessInterior from './BusinessInterior'
import BusinessShowcase from './BusinessShowcase'
import BusinessDesign from './BusinessDesign'
import BusinessTestimonial from './BusinessTestimonial'
import ProjectTimeline from '../Dream/ProjectTimeline'

const BusinessHome = () => {
  return (
    <div>
      <BussinessBanner />
      <BusinessInterior />
      <BusinessShowcase />
      <ProjectTimeline />
      <BusinessDesign />
      <BusinessTestimonial />
    </div>
  )
}

export default BusinessHome