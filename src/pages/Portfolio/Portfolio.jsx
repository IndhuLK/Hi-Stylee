import React from 'react'
import PortfolioBanner from './PortfolioBanner'
import ResidentialGallery from './ResidentialGallery'
import KitchenGallery from './KitchenGallery'
import PortfolioSections from './PortfolioSections'

const Portfolio = () => {
  return (
    <div >
      <PortfolioBanner />
      <ResidentialGallery />
      <KitchenGallery />
      <PortfolioSections />
    </div>
  )
}

export default Portfolio
