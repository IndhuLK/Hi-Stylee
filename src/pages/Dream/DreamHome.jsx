import React from 'react'
import DreamBanner from './DreamBanner'
import PersonalizedInteriors from './PersonalizedInteriors'
import SpacesShowcase from './SpacesShowcase'
import HomeDesigned from './HomeDesigned'
import Testimonial from './Testimonial'
import ProjectTimeline from './ProjectTimeline'

const DreamHome = () => {
  return (
    <div>
      <DreamBanner />
      <PersonalizedInteriors />
      <SpacesShowcase />
      <ProjectTimeline />
      <HomeDesigned />
      <Testimonial />
    </div>
  )
}

export default DreamHome