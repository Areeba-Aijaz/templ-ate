import React from 'react'

import HeroSection from '@/Components/HeroSection'
import LiveAuction from '@/Components/AuctionsSection'
import CreativeArtist from '@/Components/CreativeArtist'
import MostPopular from '@/Components/MostPopular'
import ExclusiveArtist from '@/Components/ExclusiveAssets'
import HowItWorks from '@/Components/HowItWorks'
import Navbar from '@/Components/Navbar'

const Front = () => {
  return (
    <div className='max-w-7xl'>
      {/* <Navbar /> */}
      <HeroSection/>
      <LiveAuction />
      <CreativeArtist />
      <MostPopular />
      <ExclusiveArtist />
      <HowItWorks />
     
    </div>
  )
}

export default Front
